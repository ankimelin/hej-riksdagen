import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`

const InputLabel = styled.label`
  margin: 0;
  padding: 15px 0 5px 10px;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
`

const InputArea = styled.input`
  height: 25px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;
`

const TextArea = styled.textarea`
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;
`

const SendButton = styled.button`

`

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 178px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 203px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 203px);
  }
  `

const AnswerText = styled.h2`
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
`
const QuestionButton = styled.button`

`

export const Question = () => {

  const [questionSent, setQuestionSent] = useState(false)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuestionSent(true)
  }

  const handleClick = () => {
    setName('')
    setMail('')
    setQuestion('')
    setQuestionSent(false)
  }

  return (
    <>
      {questionSent &&
        <AnswerContainer>
          <AnswerText>Tack för din fråga {name}!</AnswerText>
          <QuestionButton onClick={handleClick}>
            Ask another question
          </QuestionButton>
        </AnswerContainer>}
      {!questionSent &&
        <FormContainer onSubmit={handleSubmit} >
          <InputLabel>
            Namn
        </InputLabel>
          <InputArea
            required
            minLength='2'
            maxLength='30'
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
          <SendButton type='submit'>
            Skicka
        </SendButton>
        </FormContainer>}
    </>
  )
}
