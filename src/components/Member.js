import React from 'react'
import styled from 'styled-components'

const MemberCard = styled.div`
  width: calc(33% - 10px);
  border-radius: 10px;
  text-align: center;
`

const MemberImage = styled.img`
  width: 100%;
  border-radius: 50%;
`

const MemberName = styled.p`
  margin-top: 2px;
  font-size: 10px;  
  font-family: 'Roboto', sans-serif;
`

export const Member = ({ ...member }) => {
  return (
    <MemberCard>
      {/* <Image src='http://data.riksdagen.se/filarkiv/bilder/ledamot/34f7ceb6-9f7c-4b37-a15e-1c61ffa639e5_192.jpg'></Image>
      <Name>Margareta Nilsson</Name> */}
      <MemberImage src={member.image} alt='profile' />
      <MemberName>{member.firstName} {member.lastName}</MemberName>
    </MemberCard>
  )
}
