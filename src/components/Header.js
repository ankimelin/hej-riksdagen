import React from 'react'
import { Link } from 'react-router-dom'

import { MenuContainer, MenuButton, TitleContainer, TitleText } from '../styling/StyledHeader'

export const Header = () => {
  return (
    <>
      <MenuContainer>
        <Link style={{ textDecoration: 'none' }} to='/vi-som-jobbar-har'><MenuButton>Vi som jobbar här</MenuButton></Link>
        <Link style={{ textDecoration: 'none' }} to='/stall-en-fraga'><MenuButton>Ställ en fråga</MenuButton></Link>
      </MenuContainer >
      <TitleContainer>
        <TitleText>hej riksdagen</TitleText>
      </TitleContainer>
    </>
  )
}
