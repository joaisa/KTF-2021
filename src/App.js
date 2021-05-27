import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Import pages
import index from './pages/index'

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'


function App() {
  return <BrowserRouter>

      <Switch>

          <Route exact path="/" component={index} />

          <Redirect to="/" />

      </Switch>

  </BrowserRouter>
}

export default App;
