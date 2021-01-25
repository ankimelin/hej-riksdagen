import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
  height: 50px;
  width: calc(100% - 50px);
  border-top: solid 1px #1C5170;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - 200px);
    margin: 0 100px;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 600px);
    margin: 0 300px;
  }
`

export const FooterText = styled.h1`
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`