import React from 'react'

import * as Iconly from 'react-iconly'

const App = () => {
  return (
    <React.Fragment>
      <Iconly.IconlyProvider set="two-tone" stroke="bold" primaryColor="blue" size="xlarge">
        <Iconly.Search />
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
        <Iconly.PaperFall set="two-tone" primaryColor="#d6d" secondaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.PaperDownload primaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.PaperUpload primaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.Send primaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.Send style={{ transform: 'rotate(45deg)' }} primaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.Password primaryColor="#d6d" stroke="bold" size="xlarge"/>
        <Iconly.Work primaryColor="#d6d" stroke="bold" size="xlarge"/>
      </Iconly.IconlyProvider>
    </React.Fragment>
  )
}

export default App
