import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import store from '../store/store'
import ErtosContainer from './Ertos'

class App extends Component {
  render() {
    return (     
      <Provider store={store}>
        <Router>
          <div>
            <ErtosContainer />
          </div>
        </Router>
      </ Provider>
    )
  }
}

export default App;
