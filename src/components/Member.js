import React from 'react'

import { MemberCard, MemberImage, MemberName } from '../styling/StyledMember'

export const Member = ({ ...member }) => {
  return (
    <MemberCard>
      <MemberImage src={member.image} alt='profilepic' />
      <MemberName>{member.firstName} {member.lastName}</MemberName>
    </MemberCard>
  )
}
