import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { WeWhoWorkHere } from './routes/WeWhoWorkHere.js'
import { AskAQuestion } from './routes/AskAQuestion.js'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/vi-som-jobbar-har' exact>
          <WeWhoWorkHere />
        </Route>
        <Route path='/stall-en-fraga' exact>
          <AskAQuestion />
        </Route>
        <Route>
          <Redirect to='/vi-som-jobbar-har' />
        </Route>
      </Switch>
    </Router>
  )
}
