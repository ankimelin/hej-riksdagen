import styled from 'styled-components'

export const MemberCard = styled.div`
  padding: 5px;
  border-radius: 20px;
  width: 30%;
  text-align: center;

  &:hover {
    background-color: #F2F7FB;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 23%;
  }

  @media (min-width: 1024px) {
    width: 19%;
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