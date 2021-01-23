import React, { useState, useEffect } from 'react'

import { Member } from './Member.js'

export const MemberList = () => {

  const MEMBER_URL = 'http://data.riksdagen.se/personlista/?utformat=json'

  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

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

        const sortedMembers = memberList.sort(function (a, b) {
          // Sorts the members by party, from biggest party to smallest, last no party
          if (a.party === 'S' && (b.party === 'M' || b.party === 'SD' || b.party === 'C' || b.party === 'V' || b.party === 'KD' || b.party === 'L' || b.party === 'MP' || b.party === '-')) return -1
          else if (a.party === 'M' && (b.party === 'SD' || b.party === 'C' || b.party === 'V' || b.party === 'KD' || b.party === 'L' || b.party === 'MP' || b.party === '-')) return -1
          else if (a.party === 'SD' && (b.party === 'V' || b.party === 'MP' || b.party === 'KD' || b.party === 'C' || b.party === 'L' || b.party === '-')) return -1
          else if (a.party === 'C' && (b.party === 'V' || b.party === 'KD' || b.party === 'L' || b.party === 'MP' || b.party === '-')) return -1
          else if (a.party === 'V' && (b.party === 'MP' || b.party === 'KD' || b.party === 'L' || b.party === '-')) return -1
          else if (a.party === 'KD' && (b.party === 'L' || b.party === 'MP' || b.party === '-')) return -1
          else if (a.party === 'L' && (b.party === 'MP' || b.party === '-')) return -1
          else if (a.party === 'MP' && (b.party === '-')) return -1
          // Sorts the members by sortName if they belong to the same party
          else if (a.party === 'S' && b.party === 'S' && a.sortName < b.sortName) return -1
          else if (a.party === 'M' && b.party === 'M' && a.sortName < b.sortName) return -1
          else if (a.party === 'SD' && b.party === 'SD' && a.sortName < b.sortName) return -1
          else if (a.party === 'C' && b.party === 'C' && a.sortName < b.sortName) return -1
          else if (a.party === 'V' && b.party === 'V' && a.sortName < b.sortName) return -1
          else if (a.party === 'KD' && b.party === 'KD' && a.sortName < b.sortName) return -1
          else if (a.party === 'L' && b.party === 'L' && a.sortName < b.sortName) return -1
          else if (a.party === 'MP' && b.party === 'MP' && a.sortName < b.sortName) return -1
          else if (a.party === '-' && b.party === '-' && a.sortName < b.sortName) return -1
          else return 0
        })

        setMembers(sortedMembers)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  useEffect(getMembers, [])

  return (
    <>
      {loading && <p>loading...</p>}
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