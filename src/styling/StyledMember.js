import styled from 'styled-components'

export const MemberCard = styled.div`
  width: calc(33% - 10px);
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(25% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(18% - 20px);
    margin: 0 20px;
  }
`

export const MemberImage = styled.img`
  width: 100%;
  border-radius: 50%;
`

export const MemberName = styled.p`
  margin-top: 2px;
  font-size: 10px;  
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4px;
    font-size: 14px;  
  }

  @media (min-width: 1024px) {
    margin-top: 4px;
    font-size: 14px;  
  }
`