import React, { Component } from 'react'

export default class TestForm extends Component {
  constructor() {
    super()
    this.state = {
      mainSelector: 'vineyards',
      idSelector: '',
      baseUrl: `https://buildyourownbackendcodysara.herokuapp.com/api/v1/`,
      querySelector: '',
      querySearch: ''
    }
  }

  updateValue = (e, value) => {
    this.setState({ [value]: e.target.value })
  }

  render() {
    const { mainSelector, idSelector, baseUrl, querySelector, querySearch } = this.state
    let fullUrl = baseUrl + mainSelector + '/' + idSelector
    let maxID

    if (querySelector !== '' && idSelector === '') {
      fullUrl += querySelector + querySearch
    }

    mainSelector === 'vineyards' ? maxID = 30 : maxID = 90

    return (
      <section className="test-form-section">
        <h2>Test An Endpoint</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            className="main-selector"
            onChange={(e) => this.updateValue(e, 'mainSelector')}
          >
            <option value="vineyards">Vineyards</option>
            <option value="wines">Wines</option>
          </select>
          <input
            type="number"
            min={1}
            max={maxID}
            onChange={(e) => this.updateValue(e, 'idSelector')}
          />
          <select
            className="query-selector"
            onChange={(e) => this.updateValue(e, 'querySelector')}
          >
            <option value="">--</option>
            <option value="?name=">name</option>
            <option value="?region=">region</option>
          </select>
          <input
            type="text"
            placeholder="Search for a vineyard by name or region"
            value={querySearch}
            onChange={(e) => this.updateValue(e, 'querySearch')} 
          />
        </form>
        <form>
          <input type="text" value={fullUrl} />
          <button>Test</button>
        </form>
      </section>
    )
  }
}