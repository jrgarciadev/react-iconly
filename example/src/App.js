import React from 'react'

import * as Iconly from 'react-iconly'

const App = () => {
  return (
    <React.Fragment>
        <Iconly.Search set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Folder set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Wallet set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Graph set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Bookmark set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Category set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
    </React.Fragment>
  )
}

export default App
