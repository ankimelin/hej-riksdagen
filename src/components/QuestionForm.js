import React, { useState } from 'react'

export const QuestionForm = () => {

  const [questionSent, setQuestionSent] = useState(false)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuestionSent(true)
    setName('')
    setMail('')
    setQuestion('')
  }

  return (
    <>
      {questionSent ? <p>Tack för din fråga!</p> : <p>Fråga vad du vill!</p>}
      <form onSubmit={handleSubmit} >
        <label>
          Namn
        </label>
        <input
          required
          minLength='2'
          maxLength='12'
          value={name}
          onChange={(event) => setName(event.target.value)}
        >
        </input>
        <label>
          Mejl
        </label>
        <input
          required
          type='email'
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        >
        </input>
        <textarea
          required
          value={question}
          onChange={event => setQuestion(event.target.value)}
        >
        </textarea>
        <button type='submit'>
          Skicka
        </button>
      </form>
    </>
  )
}
