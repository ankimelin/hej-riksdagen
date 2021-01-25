import React, { useState } from 'react'

import { QuestionContainer, FormContainer, InputLabel, InputArea, TextArea, Button, AnswerContainer, AnswerText } from '../styling/StyledQuestion'

export const Question = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [question, setQuestion] = useState('')
  const [questionSent, setQuestionSent] = useState(false)

  const sendQuestion = () => {
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
      {questionSent &&
        <AnswerContainer>
          <AnswerText>Tack för din fråga {name}!</AnswerText>
          <Button className='question-button' onClick={goToQuestionForm}>
            Ställ en till fråga
            </Button>
        </AnswerContainer>}
    </QuestionContainer>
  )
}
