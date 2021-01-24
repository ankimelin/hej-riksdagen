import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import { Member } from './Member'
import { PartyContainer, PartyButton, LoaderContainer, MembersContainer } from '../styling/StyledMemberList'

export const MemberList = () => {

  const MEMBER_URL = 'http://data.riksdagen.se/personlista/?utformat=json'
  const parties = ['S', 'M', 'SD', 'C', 'V', 'KD', 'L', 'MP', '-'] // list of parties, biggest to smallest

  const [allMembers, setAllMembers] = useState([]) // contains all members in sort order, the filtering is done on allMembers
  const [displayedMembers, setDisplayedMembers] = useState([]) // contains either all members or filtered members by party, displayedMembers is what is displayed in the browser
  const [loading, setLoading] = useState(true) // decides whether loader should show or not

  const filterMembers = (party) => {
    const filteredMembers =
      allMembers.filter(member => member.party === party)
    setDisplayedMembers(filteredMembers)
  }

  const storeMembers = (sortedMembers) => {
    localStorage.setItem('storedMembers', JSON.stringify(sortedMembers))
  }

  const sortMembers = (memberList) => {
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
    storeMembers(sortedMembers) // store in localstorage
    setAllMembers(sortedMembers) // needed for the filtering
    setDisplayedMembers(sortedMembers) // decides what to display
    setLoading(false)
  }

  const getMembers = () => {

    const storedMembers = JSON.parse(localStorage.getItem('storedMembers') || '[]')

    if (storedMembers.length > 0) {
      setAllMembers(storedMembers) // needed for the filtering
      setDisplayedMembers(storedMembers) // decides what to display
      setLoading(false)
    } else {
      fetch(MEMBER_URL)
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

  useEffect(getMembers, [])

  return (
    <>
      <PartyContainer>
        <PartyButton onClick={() => setDisplayedMembers(allMembers)}>
          Alla
          </PartyButton>
        {parties.map(party => {
          return party !== '-' &&
            <PartyButton key={party} onClick={() => filterMembers(party)}>
              {party}
            </PartyButton>
        })}
      </PartyContainer>
      {loading &&
        <LoaderContainer>
          <Loader
            type='TailSpin'
            color='#1C5170' />
        </LoaderContainer>}
      {!loading &&
        <MembersContainer>
          {displayedMembers.map(member => {
            return <Member
              key={member.id}
              {...member}
            />
          })}
        </MembersContainer>}
    </>
  )
}