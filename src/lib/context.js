import React, { createContext, useContext } from 'react'

export const IconlyContext = createContext()
IconlyContext.displayName = 'IconlyIconlyContext'

export const IconlyProvider = ({
  children,
  primaryColor,
  secondaryColor,
  set,
  size,
  stroke
}) => {
  const defaulValue = {
    primaryColor: primaryColor || 'currentColor',
    secondaryColor: secondaryColor || null,
    set: set || 'light',
    size: size || 'medium',
    stroke: stroke || 'regular'
  }

  return (
    <IconlyContext.Provider value={defaulValue}>
      {children}
    </IconlyContext.Provider>
  )
}

export const useIconlyTheme = () => {
  const context = useContext(IconlyContext)
  if (context === undefined) {
    throw new Error(`useIconlyTheme must be used within a IconlyProvider`)
  }
  return context
}
