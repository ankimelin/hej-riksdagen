import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 100px;
  }
  
  @media (min-width: 1024px) {
    margin: 0 300px;
  }
`

export const MenuLink = styled(NavLink)`
  margin: 0;
  padding: 5px;
  border: none;
  background-color: white;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: black;

  &:hover {
    cursor: pointer; 
  }

  &.active {
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;

    &:focus {
      outline: 2px solid orange;  
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  border-top: 1px solid #1C5170;
  border-bottom: 1px solid #1C5170;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 100px;
  }
`

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  color: #1C5170;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`