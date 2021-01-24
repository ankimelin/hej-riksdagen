import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import { Member } from './Member.js'

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px;
  height: 50px;
  border-bottom: solid 1px #1C5170;
`

const PartyButton = styled.button`
  height: 50px;
  border: none;
  background-color: white;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;

  &:hover {cursor: pointer; text-decoration: underline;}
`

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 178px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 203px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 203px);
  }
  `

const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px 25px;
  `

export const Members = () => {

  const MEMBER_URL = 'http://data.riksdagen.se/personlista/?utformat=json'

  const parties = ['S', 'M', 'SD', 'C', 'V', 'KD', 'L', 'MP', '-'] // list of parties in the Swedish parliment, biggest to smallest

  const [allMembers, setAllMembers] = useState([]) // contains all members in sort order
  const [displayedMembers, setDisplayedMembers] = useState([]) // contains either all members or filtered members by party
  const [loading, setLoading] = useState(true) // decides whether loader should show or not

  const sortMembers = (memberList) => {
    const sortedMembers =
      memberList.sort((a, b) => {
        if (a.party !== b.party) {
          return parties.indexOf(a.party) - parties.indexOf(b.party) // sorts in numerical ascending order
        } else {
          if (a.sortName < b.sortName) return -1
          else if (a.sortName > b.sortName) return 1
          else return 0
        }
      })
    setAllMembers(sortedMembers)
    setDisplayedMembers(sortedMembers)
  }

  const filterMembers = (party) => {
    const filteredMembers =
      allMembers.filter(member => member.party === party)
    setDisplayedMembers(filteredMembers)
  }

  const getMembers = () => {
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
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  useEffect(getMembers, [])

  return (
    <>
      <ButtonContainer>
        <PartyButton onClick={() => setDisplayedMembers(allMembers)}>
          Alla
          </PartyButton>
        {parties.map(party => {
          return party !== '-' &&
            <PartyButton onClick={() => filterMembers(party)}>
              {party}
            </PartyButton>
        })}
      </ButtonContainer>
      {loading &&
        <LoaderContainer>
          <Loader
            type='TailSpin'
            color='#1C5170' />
        </LoaderContainer>}
      {!loading &&
        <MemberContainer>
          {/* <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member /> */}
          {displayedMembers.map(member => {
            return <Member
              key={member.id}
              {...member}
            />
          })}
        </MemberContainer>}
    </>
  )
}