import React, { useState } from 'react'

import { QuestionContainer, FormContainer, InputLabel, InputArea, TextArea, QuestionButton, AnswerContainer, AnswerText }
  from '../styling/StyledQuestion'

export const Question = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')
  // decides whether question form or answer should be displayed
  const [questionSent, setQuestionSent] = useState(false)

  /** goes to answer */
  const sendQuestion = () => {
    setQuestionSent(true)
  }

  /** cleares question form */
  const clearQuestionForm = () => {
    setName('')
    setEmail('')
    setQuestion('')
  }

  /** goes back to question */
  const goToQuestionForm = () => {
    clearQuestionForm()
    setQuestionSent(false)
  }

  return (
    <QuestionContainer>
      {!questionSent &&
        <FormContainer onSubmit={sendQuestion}>
          <InputLabel>Namn</InputLabel>
          <InputArea
            required
            minLength='2'
            maxLength='20'
            value={name}
            onChange={event => setName(event.target.value)}>
          </InputArea>
          <InputLabel>Mejl</InputLabel>
          <InputArea
            required
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}>
          </InputArea>
          <InputLabel>Fråga</InputLabel>
          <TextArea
            required
            value={question}
            onChange={event => setQuestion(event.target.value)}>
          </TextArea>
          <QuestionButton
            className='send-button'
            type='submit'>
            Skicka
            </QuestionButton>
          <QuestionButton
            className='clear-button'
            onClick={clearQuestionForm}>
            Rensa
            </QuestionButton>
        </FormContainer>}
      {questionSent &&
        <AnswerContainer>
          <AnswerText>Tack för din fråga {name}!</AnswerText>
          <QuestionButton
            className='question-button'
            onClick={goToQuestionForm}>
            Ställ en till fråga
            </QuestionButton>
        </AnswerContainer>}
    </QuestionContainer>
  )
}
