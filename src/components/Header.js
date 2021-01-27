import React from 'react'

import { MenuContainer, MenuLink, TitleContainer, TitleText } from '../styling/StyledHeader'

export const Header = () => {
  return (
    <>
      <MenuContainer>
        <MenuLink exact to='/vi-som-jobbar-har'>Vi som jobbar här</MenuLink>
        <MenuLink exact to='/stall-en-fraga'>Ställ en fråga</MenuLink>
      </MenuContainer >
      <TitleContainer>
        <TitleText>hej riksdagen</TitleText>
      </TitleContainer>
    </>
  )
}
