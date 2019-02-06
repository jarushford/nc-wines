import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('Header', () => {
  it('Sould match the snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should scroll on first button click', () => {
    const wrapper = shallow(<Header />)
    window.scrollTo = jest.fn().mockImplementation(() => true)
    wrapper.find('button').first().simulate('click')
    expect(wrapper).toMatchSnapshot()
  })

  it('should scroll on second button click', () => {
    const wrapper = shallow(<Header />)
    window.scrollTo = jest.fn().mockImplementation(() => true)
    wrapper.find('button').last().simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})