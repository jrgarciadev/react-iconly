import React from 'react'

const defaultContext = {
  inGroup: false
}

export const TabsContext = React.createContext(defaultContext)

export const useTabsContext = () => React.useContext(TabsContext)
