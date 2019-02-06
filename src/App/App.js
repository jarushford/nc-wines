import React, { Component } from 'react'
import Header from '../Header/Header'
import TestForm from '../TestForm/TestForm'
import APIList from '../APIList/APIList'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <TestForm />
        <APIList />
      </div>
    )
  }
}

