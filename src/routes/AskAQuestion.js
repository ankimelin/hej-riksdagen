import React from 'react'

import { Header } from '../components/Header'
import { Question } from '../components/Question'
import { Footer } from '../components/Footer'
import { MainContainer } from '../styling/StyledRoutes'

export const AskAQuestion = () => {
  return (
    <MainContainer>
      <Header />
      <Question />
      <Footer />
    </MainContainer>
  )
}
