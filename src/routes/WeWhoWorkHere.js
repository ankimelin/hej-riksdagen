import React from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { MemberList } from '../components/MemberList'
import { Footer } from '../components/Footer'

const MainMembersContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

export const WeWhoWorkHere = () => {
  return (
    <MainMembersContainer>
      <Header />
      <MemberList />
      <Footer />
    </MainMembersContainer>
  )
}
