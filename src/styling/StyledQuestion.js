import styled from 'styled-components'

export const QuestionContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 75px 225px;
  }

  @media (min-width: 1024px) {
    padding: 75px 0;
    width: 400px;
  }
`

export const InputLabel = styled.label`
  margin: 0;
  padding: 15px 0 5px 10px;
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

export const InputArea = styled.input`
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
  height: 25px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    height: 35px;
    font-size: 14px;
  }
`

export const TextArea = styled.textarea`
  padding-top: 5px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
  height: 50px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    height: 100px;
    font-size: 14px;
  }
`

export const QuestionButton = styled.button`
  margin-top: 25px;
  padding: 10px;
  border: none;
  width: 100%;
  background-color: #1C5170;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  color: #F2F7FB;

  &.clear-button {
    background-color: #F2F7FB;
    color: #173A4F;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;

    &:hover {
      background-color: #FCFF5C;
      color: #173A4F;  
      cursor: pointer;
    }
  }
`

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: calc(100vh - 202px);

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 150px;
    height: calc(100vh - 478px);
  }

  @media (min-width: 1024px) {
    padding: 150px;
    height: calc(100vh - 478px);
    width: 400px;
  }
  `

export const AnswerText = styled.h2`
  margin: 0;
  padding: 0;
  line-height: 25px;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: px;
  }
`