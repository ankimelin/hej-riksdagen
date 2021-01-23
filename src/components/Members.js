import React, { useState, useEffect } from 'react'

import { Member } from './Member.js'

export const Members = () => {

  const MEMBER_URL = 'http://data.riksdagen.se/personlista/?utformat=json'

  const parties = ['S', 'M', 'SD', 'C', 'V', 'KD', 'L', 'MP', '-'] // list of parties in the Swedish parliment, biggest to smallest

  const [allMembers, setAllMembers] = useState([]) // contains all members in sort order
  const [members, setMembers] = useState([]) // contains either all members or filtered members by party
  const [loading, setLoading] = useState(true) // decides whether loader should show or not

  const sortMembers = (memberList) => {
    const sortedMembers = memberList.sort(function (a, b) {
      if (a.party !== b.party) {
        return parties.indexOf(a.party) - parties.indexOf(b.party)
      } else {
        if (a.sortName < b.sortName) return -1
        else if (a.sortName > b.sortName) return 1
        else return 0
      }
    })
    setAllMembers(sortedMembers)
    setMembers(sortedMembers)
  }

  const filterMembers = (party) => {
    setLoading(true)
    const filteredMembers = allMembers.filter(member => member.party === party)
    setMembers(filteredMembers)
    setLoading(false)
  }

  const getMembers = () => {
    fetch(MEMBER_URL)
      .then(res => res.json())
      .then(json => {
        const memberList = json.personlista.person.map(member => {
          return {
            id: member.sourceid,
            firstName: member.tilltalsnamn,
            lastName: member.efternamn,
            sortName: member.sorteringsnamn,
            image: member.bild_url_192,
            party: member.parti,
            role: member.status,
            division: member.valkrets
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
      {parties.map(party => {
        return party !== '-' && <button onClick={() => filterMembers(party)}>{party}</button>
      })}
      <br></br>
      {loading && <h1>loading...</h1>}
      {!loading && members.map(member => {
        return <Member
          key={member.id}
          {...member}
        />
      })
      }
    </>
  )
}