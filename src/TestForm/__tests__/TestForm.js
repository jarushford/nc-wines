import React from 'react'
import { shallow } from 'enzyme'
import TestForm from '../TestForm'

describe('TestForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TestForm />)
  })

  it('should match the snapshot in default state', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with a querySelector', () => {
    wrapper.setState({ querySelector: 'name' })
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with mainSelector wines', () => {
    wrapper.setState({ mainSelector: 'wines' })
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot while loading', () => {
    wrapper.setState({ loading: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expected = {
      mainSelector: 'vineyards',
      idSelector: '',
      baseUrl: `https://buildyourownbackendcodysara.herokuapp.com/api/v1/`,
      querySelector: '',
      querySearch: '',
      data: {},
      loading: false
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should updateValue with querySelector', () => {
    const e = { target: { value: 'name' } }
    wrapper.setState({ idSelector: 1 })
    wrapper.instance().updateValue(e, 'querySelector')
    expect(wrapper.state().querySelector).toEqual('name')
    expect(wrapper.state().idSelector).toEqual('')
  })

  it('should updateValue with idSelector', () => {
    const e = { target: { value: 4 } }
    wrapper.setState({ querySelector: 'name', querySearch: 'd' })
    wrapper.instance().updateValue(e, 'idSelector')
    expect(wrapper.state().idSelector).toEqual(4)
    expect(wrapper.state().querySelector).toEqual('')
    expect(wrapper.state().querySearch).toEqual('')
  })

  it('should updateValue with mainSelector', () => {
    const e = { target: { value: 'wines' } }
    wrapper.setState({ querySelector: 'name', querySearch: 'd' })
    wrapper.instance().updateValue(e, 'mainSelector')
    expect(wrapper.state().mainSelector).toEqual('wines')
    expect(wrapper.state().querySelector).toEqual('')
    expect(wrapper.state().querySearch).toEqual('')
  })

  it('should updateValue with querySearch', () => {
    const e = { target: { value: 'coast' } }
    wrapper.instance().updateValue(e, 'querySearch')
    expect(wrapper.state().querySearch).toEqual('coast')
  })

  it('should makeRequest successfully', async () => {
    const e = {
      preventDefault: jest.fn(),
      target: { firstElementChild: { value: 'url' } }
    }
    const expected = { hello: true }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: jest.fn().mockImplementation(() => expected)
    }))
    await wrapper.instance().makeRequest(e)
    expect(wrapper.state().data).toEqual(expected)
  })

  it('should makeRequest unsuccessfully', async () => {
    const e = {
      preventDefault: jest.fn(),
      target: { firstElementChild: { value: 'url' } }
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Oh no!'
    }))
    await wrapper.instance().makeRequest(e)
    expect(wrapper.state().data.error).toEqual('Oh no!')
  })

  it('should preventDefault on data input form submit', () => {
    const e = { preventDefault: jest.fn() }
    wrapper.find('.data-input').simulate('submit', e)
    expect(e.preventDefault).toBeCalled()
  })

  it('should updateValue onChange of mainSelector', () => {
    const e = { target: { value: 'wines' } }
    wrapper.find('.main-selector').simulate('change', e)
    expect(wrapper.state().mainSelector).toEqual('wines')
  })

  it('should updateValue onChange of idSelector', () => {
    const e = { target: { value: 4 } }
    wrapper.find('#id').simulate('change', e)
    expect(wrapper.state().idSelector).toEqual(4)
  })

  it('should updateValue onChange of querySelector', () => {
    const e = { target: { value: 'name' } }
    wrapper.find('.query-selector').simulate('change', e)
    expect(wrapper.state().querySelector).toEqual('name')
  })

  it('should updateValue onChange of querySearch', () => {
    const e = { target: { value: 'coast' } }
    wrapper.find('.query-search').simulate('change', e)
    expect(wrapper.state().querySearch).toEqual('coast')
  })

  it('should call makeRequest when the request form is submitted', () => {
    const e = {
      preventDefault: jest.fn(),
      target: { firstElementChild: { value: 'url' } }
    }
    const spy = jest.spyOn(wrapper.instance(), 'makeRequest')
    wrapper.find('.submit-request').simulate('submit', e)
    expect(spy).toBeCalled()
  })
})