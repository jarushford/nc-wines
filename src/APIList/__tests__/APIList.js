import React from 'react'
import { shallow } from 'enzyme'
import APIList from '../APIList'

describe('APIList', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<APIList />)
    expect(wrapper).toMatchSnapshot()
  })
})