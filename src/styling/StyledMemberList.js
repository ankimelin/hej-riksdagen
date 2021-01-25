import styled from 'styled-components'

export const PartyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px;
  border-bottom: solid 1px #1C5170;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 100px;
    height: 75px;
  }

  @media (min-width: 1024px) {
    margin: 0 300px;
    height: 75px;
  }
`

export const PartyButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  height: 50px;   
  background-color: white;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;

  &:hover {cursor: pointer; text-decoration: underline;}

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 203px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 253px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 253px);
  }
  `

export const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px 25px 55px 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 5px 100px 55px 100px;
  }

  @media (min-width: 1024px) {
    padding: 5px 280px 55px 280px;
  }
  `