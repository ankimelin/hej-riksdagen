import React from 'react'

export const Member = ({ ...member }) => {
  return (
    <>
      <img src={member.image} alt='profile' />
      <p>{member.firstName} {member.lastName}</p>
      {member.party === 'S' ? <p>sosse</p> : null}
    </>
  )
}
