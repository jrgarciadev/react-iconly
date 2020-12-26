import React from 'react'
import { Search, Iconly } from './'

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
