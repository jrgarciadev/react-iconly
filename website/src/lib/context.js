import { useState, useMemo, createContext } from 'react'

export const IconDataContext = createContext()

const { Provider } = IconDataContext

const IconData = ({ children }) => {
  const [icon, setIcon] = useState(null)
  const value = useMemo(
    () => ({
      icon,
      updateIcon: (newIcon) => setIcon(newIcon),
      removeIcon: () => setIcon(null)
    }),
    [icon]
  )

  return <Provider value={value}>{children}</Provider>
}

export default IconData
