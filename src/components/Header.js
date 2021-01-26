import React from 'react'
import { Link } from 'react-router-dom'

import { MenuContainer, MenuButton, TitleContainer, TitleText } from '../styling/StyledHeader'

export const Header = () => {
  return (
    <>
      <MenuContainer>
        <Link to='/vi-som-jobbar-har' style={{ textDecoration: 'none' }}><MenuButton>Vi som jobbar här</MenuButton></Link>
        <Link to='/stall-en-fraga' style={{ textDecoration: 'none' }}><MenuButton>Ställ en fråga</MenuButton></Link>
      </MenuContainer >
      <TitleContainer>
        <TitleText>hej riksdagen</TitleText>
      </TitleContainer>
    </>
  )
}
