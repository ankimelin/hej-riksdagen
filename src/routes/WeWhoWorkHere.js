import React from 'react'

import { Header } from '../components/Header'
import { MemberList } from '../components/MemberList'
import { Footer } from '../components/Footer'
import { MainContainer } from '../styling/StyledRoutes'

export const WeWhoWorkHere = () => {
  return (
    <MainContainer>
      <Header />
      <MemberList />
      <Footer />
    </MainContainer>
  )
}
