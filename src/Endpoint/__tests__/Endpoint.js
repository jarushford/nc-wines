import React from 'react'
import { shallow } from 'enzyme'
import Endpoint from '../Endpoint'

describe('Endpoint', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Endpoint
      method="GET" 
      title="/api/v1/vineyards/:id" 
      description="Returns a single vineyard."
      returned="Object"
      required="N/A" 
    />)
    expect(wrapper).toMatchSnapshot()
  })
})