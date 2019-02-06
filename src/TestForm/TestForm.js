import React, { Component } from 'react'
import ReactJson from 'react-json-view'

export default class TestForm extends Component {
  constructor() {
    super()
    this.state = {
      mainSelector: 'vineyards',
      idSelector: '',
      baseUrl: `https://buildyourownbackendcodysara.herokuapp.com/api/v1/`,
      querySelector: '',
      querySearch: '',
      data: {}
    }
  }

  updateValue = (e, value) => {
    if (value === 'querySelector' && e.target.value !== '') {
      this.setState({
        [value]: e.target.value,
        idSelector: ''
      })
    } else if (value === 'idSelector' || value === 'mainSelector') {
      this.setState({
        [value]: e.target.value,
        querySelector: '',
        querySearch: ''
      })
    } else {
      this.setState({ [value]: e.target.value })
    }
  }

  makeRequest = async (e) => {
    e.preventDefault()
    const url = e.target.firstElementChild.value
    const response = await fetch(url)
    if (response.ok) {
      const result = await response.json()
      this.setState({ data: result })
    } else {
      this.setState({ data: { error: response.statusText } })
    }
  }

  render() {
    const { mainSelector, idSelector, baseUrl, querySelector, querySearch, data } = this.state
    let fullUrl = baseUrl + mainSelector + '/' + idSelector
    let maxID
    let isDisabled

    if (querySelector !== '' && idSelector === '') {
      fullUrl += querySelector + querySearch
    }

    mainSelector === 'vineyards' ? maxID = 30 : maxID = 90
    mainSelector === 'vineyards' ? isDisabled = false : isDisabled = true

    return (
      <section className="test-form-section">
        <h2>Try Getting Data</h2>
        <form className="data-input" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="main">What would you like to search?</label>
          <select
            id="main"
            className="main-selector"
            onChange={(e) => this.updateValue(e, 'mainSelector')}
          >
            <option value="vineyards">Vineyards</option>
            <option value="wines">Wines</option>
          </select>
          <label htmlFor="id">Try using an ID from {`1-${maxID}`} to get a specific record:</label>
          <input
            id="id"
            type="number"
            value={idSelector}
            onChange={(e) => this.updateValue(e, 'idSelector')}
          />
          <label className={`${isDisabled && 'disabled'}`} htmlFor="queryselect">Or do you already know the vineyard you're looking for?</label>
          <select
            id="queryselect"
            className={`query-selector ${isDisabled && 'disabled'}`}
            value={querySelector}
            disabled={isDisabled}
            onChange={(e) => this.updateValue(e, 'querySelector')}
          >
            <option value="">--</option>
            <option value="?name=">name</option>
            <option value="?region=">region</option>
          </select>
          <input
            type="text"
            className={`${isDisabled && 'disabled'}`}
            placeholder="Search for a vineyard by name or region"
            value={querySearch}
            disabled={isDisabled}
            onChange={(e) => this.updateValue(e, 'querySearch')} 
          />
        </form>
        <form className="submit-request" onSubmit={(e) => this.makeRequest(e)}>
          <input type="text" value={fullUrl} readOnly />
          <button>Test</button>
          <p>This may take a few moments, your data will be displayed below when finished.</p>
        </form>
        <h3>Output</h3>
        <ReactJson src={data} />
      </section>
    )
  }
}