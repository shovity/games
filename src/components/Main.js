import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Home}/>
        </Switch>
      </main>
    )
  }
}

export default Main
