import React, { Component } from 'react'
import Header from '../Header/Header'
import TestForm from '../TestForm/TestForm'

export default class App extends Component {
  constructor() {
    super()
  }



  render() {
    return (
      <div className="App">
        <Header />
        <TestForm />
      </div>
    )
  }
}

