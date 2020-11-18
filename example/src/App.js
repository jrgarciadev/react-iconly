import React from 'react'

import * as Iconly from 'react-iconly'

const App = () => {
  return (
    <React.Fragment>
      <Iconly.IconlyProvider set="light" primaryColor="blue">
        <Iconly.Search set="two-tone" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Folder set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Wallet set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Graph set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Bookmark set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Category  primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Home set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Notification set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Chat set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Heart set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.Paper set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.PaperPlus set="two-tone" primaryColor="#d6d" secondaryColor="#6D00F5" stroke="bold" size="xlarge"/>
        <Iconly.PaperNegative set="two-tone" primaryColor="#d6d" secondaryColor="#d6d" stroke="bold" size="xlarge"/>
      </Iconly.IconlyProvider>
    </React.Fragment>
  )
}

export default App
