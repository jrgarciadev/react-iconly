import { useState, useMemo, createContext } from 'react'

export const IconDataContext = createContext()

const { Provider } = IconDataContext

const initialData = {
  visible: false,
  set: '',
  svgPath: '',
  name: '',
  componentName: '',
  objectID: ''
}

const IconData = ({ children }) => {
  const [icon, setIcon] = useState(() => initialData)
  const value = useMemo(
    () => ({
      icon,
      updateIcon: (newIcon) =>
        setIcon(() => {
          return { visible: true, ...newIcon }
        }),
      removeIcon: () =>
        setIcon((currentIcon) => {
          return {
            ...currentIcon,
            visible: false
          }
        })
    }),
    [icon]
  )

  return <Provider value={value}>{children}</Provider>
}

export default IconData
