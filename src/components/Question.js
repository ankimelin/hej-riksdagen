import React, { useState } from 'react'
import styled from 'styled-components'

const QuestionContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 75px 200px;
  }

  @media (min-width: 1024px) {
    padding: 75px 0;
    width: 400px;
  }
`

const InputLabel = styled.label`
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

const InputArea = styled.input`
  height: 25px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
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

const TextArea = styled.textarea`
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
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

const Button = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 10px;
  border: none;
  background-color: #173A4F;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  color: white;

  &.clean-button {
    background-color: #F2F7FB;
    color: #173A4F;
    &:hover {
      color: #173A4F;  
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #FCFF5C;
    color: #173A4F;  
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

const AnswerContainer = styled.div`
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
    width: 400px;
    height: calc(100vh - 478px);
  }
  `

const AnswerText = styled.h2`
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

export const Question = () => {

  const [questionSent, setQuestionSent] = useState(false)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [question, setQuestion] = useState('')

  const sendQuestion = (event) => {
    event.preventDefault()
    setQuestionSent(true)
  }

  const cleanQuestionForm = () => {
    setName('')
    setMail('')
    setQuestion('')
  }

  const goToQuestionForm = () => {
    cleanQuestionForm()
    setQuestionSent(false)
  }

  return (
    <QuestionContainer>
      {questionSent &&
        <AnswerContainer>
          <AnswerText>Tack för din fråga {name}!</AnswerText>
          <Button className='question-button' onClick={goToQuestionForm}>
            Ställ en till
          </Button>
        </AnswerContainer>}
      {!questionSent &&
        <FormContainer onSubmit={sendQuestion} >
          <InputLabel>
            Namn
        </InputLabel>
          <InputArea
            required
            minLength='2'
            maxLength='20'
            value={name}
            onChange={event => setName(event.target.value)}
          >
          </InputArea>
          <InputLabel>
            Mejl
        </InputLabel>
          <InputArea
            required
            type='email'
            value={mail}
            onChange={event => setMail(event.target.value)}
          >
          </InputArea>
          <InputLabel>
            Fråga
        </InputLabel>
          <TextArea
            required
            value={question}
            onChange={event => setQuestion(event.target.value)}
          >
          </TextArea>
          <Button className='send-button' type='submit'>
            Skicka
        </Button>
          <Button className='clean-button' onClick={cleanQuestionForm}>
            Rensa
        </Button>
        </FormContainer>}
    </QuestionContainer>
  )
}
