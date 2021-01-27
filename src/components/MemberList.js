import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import { Member } from './Member'
import { FilterContainer, FilterButton, LoaderContainer, MembersContainer } from '../styling/StyledMemberList'

export const MemberList = () => {

  const PARLIMENT_MEMBERS_URL = 'https://data.riksdagen.se/personlista/?utformat=json'
  const parties = ['S', 'M', 'SD', 'C', 'V', 'KD', 'L', 'MP', '-'] // list of parties, biggest to smallest

  const [allMembers, setAllMembers] = useState([]) // contains all members in sort order
  const [displayedMembers, setDisplayedMembers] = useState([]) // this is what is displayed in the browser
  const [loading, setLoading] = useState(true) // decides whether loader should show or not

  const filterMembers = (party) => { // filter members on party
    const filteredMembers =
      allMembers.filter(member => member.party === party)
    setDisplayedMembers(filteredMembers)
  }

  const storeMembers = (sortedMembers) => { // store members in localstorage
    localStorage.setItem('storedMembers', JSON.stringify(sortedMembers))
  }

  const sortMembers = (memberList) => { // sort members on 1. party and 2. sortName
    const sortedMembers =
      memberList.sort((a, b) => {
        if (a.party !== b.party) {
          return parties.indexOf(a.party) - parties.indexOf(b.party)
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

  const getMembers = () => { // gets members from localstorage or API

    const storedMembers = JSON.parse(localStorage.getItem('storedMembers') || '[]') // gets members if stored in localstorage, otherwise sets storedMembers to an empty array

    if (storedMembers.length > 0) { // if there are stored members in the localstorage
      setAllMembers(storedMembers)
      setDisplayedMembers(storedMembers)
      setLoading(false)
    } else { // if there are no stored members in the localstorage
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

  useEffect(getMembers, []) // gets members when component is mounted

  return (
    <>
      <FilterContainer>
        <FilterButton onClick={() => setDisplayedMembers(allMembers)}>Alla</FilterButton>
        {parties.map(party => {
          return party !== '-' &&
            <FilterButton key={party} onClick={() => filterMembers(party)}>{party}</FilterButton>
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