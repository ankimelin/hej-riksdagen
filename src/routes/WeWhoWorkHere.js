import React from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header.js'
import { Members } from '../components/Members.js'
import { Footer } from '../components/Footer.js'

const MainMembersContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

export const WeWhoWorkHere = () => {
  return (
    <MainMembersContainer>
      <Header />
      <Members />
      <Footer />
    </MainMembersContainer>
  )
}
