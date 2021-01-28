import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import { Member } from './Member'
import { FilterContainer, FilterButton, LoaderContainer, MembersContainer }
  from '../styling/StyledMemberList'

export const MemberList = () => {

  const PARLIMENT_MEMBERS_URL = 'https://data.riksdagen.se/personlista/?utformat=json'
  // list of parties, biggest to smallest
  const parties = ['S', 'M', 'SD', 'C', 'V', 'KD', 'L', 'MP', '-']

  // contains all members in sort order 
  const [allMembers, setAllMembers] = useState([])
  // contains what is displayed in the browser
  const [displayedMembers, setDisplayedMembers] = useState([])
  // decides whether loader should show or not
  const [loading, setLoading] = useState(true)
  // decides which filter button to style as active
  const [selected, setSelected] = useState('alla')

  /** filters members on party */
  const filterMembers = (party) => {
    const filteredMembers =
      allMembers.filter(member => member.party === party)
    setDisplayedMembers(filteredMembers)
    setSelected(party)
  }

  /** stores members in localstorage */
  const storeMembers = (sortedMembers) => {
    localStorage.setItem('storedMembers', JSON.stringify(sortedMembers))
  }

  /** sorts members on 1. party and 2. sortname */
  const sortMembers = (memberList) => {
    const sortedMembers =
      memberList.sort((a, b) => {
        // if member a and be does not belong to the same party
        if (a.party !== b.party) {
          return parties.indexOf(a.party) - parties.indexOf(b.party)
          // if member a and b does belong to the same party
        } else {
          if (a.sortName < b.sortName) return -1
          else if (a.sortName > b.sortName) return 1
          else return 0
        }
      })
    storeMembers(sortedMembers)
    setAllMembers(sortedMembers)
    setDisplayedMembers(sortedMembers)
    setLoading(false)
  }

  /** gets members from localstorage or API */
  const getMembers = () => {

    // gets members if stored in localstorage, otherwise sets storedMembers to an empty array
    const storedMembers = JSON.parse(localStorage.getItem('storedMembers') || '[]')

    // if there are stored members in the localstorage
    if (storedMembers.length > 0) {
      setAllMembers(storedMembers)
      setDisplayedMembers(storedMembers)
      setLoading(false)
      // if there are no stored members in the localstorage
    } else {
      fetch(PARLIMENT_MEMBERS_URL)
        .then(res => res.json())
        .then(json => {
          const memberList =
            json.personlista.person.map(member => {
              return {
                id: member.sourceid,
                firstName: member.tilltalsnamn,
                lastName: member.efternamn,
                sortName: member.sorteringsnamn,
                image: member.bild_url_192,
                party: member.parti,
              }
            })
          sortMembers(memberList)
        })
        .catch(err => console.log(err))
    }
  }

  // gets members when component is mounted
  useEffect(getMembers, [])

  return (
    <>
      <FilterContainer>
        <FilterButton
          className={selected === 'alla' ? 'active' : null}
          onClick={() => {
            setDisplayedMembers(allMembers)
            setSelected('alla')
          }}>
          Alla
        </FilterButton>
        {parties.map(party => {
          return party !== '-' &&
            <FilterButton key={party}
              className={selected === party ? 'active' : null}
              onClick={() => filterMembers(party)}>
              {party}
            </FilterButton>
        })}
      </FilterContainer>
      {loading &&
        <LoaderContainer>
          <Loader type='TailSpin' color='#1C5170' />
        </LoaderContainer>}
      {!loading &&
        <MembersContainer>
          {displayedMembers.map(member => {
            return <Member key={member.id} {...member} />
          })}
        </MembersContainer>}
    </>
  )
}