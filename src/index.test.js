import React from 'react'
import Iconly, { Search } from './'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(Search).toBeTruthy()
  })
})

describe('IconlyElement', () => {
  it('is truthy', () => {
    const element = <Iconly name='Search' />
    expect(element).toBeTruthy()
  })
})
