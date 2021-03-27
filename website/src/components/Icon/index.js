import { useContext } from 'react'
import { StyledIcon } from './styles'
import { IconDataContext } from '@lib/context'
import { Iconly } from 'react-iconly'
import * as gtag from '@lib/gtag'
import useDarkMode from 'use-dark-mode'

const Icon = (icon) => {
  const { updateIcon } = useContext(IconDataContext)
  const darkMode = useDarkMode()
  const handleClick = () => {
    updateIcon(icon)
    gtag.event({ action: 'selected', category: 'icon', label: icon.name })
  }
  return (
    <StyledIcon
      set={icon.set}
      onClick={handleClick}
      isDarkMode={darkMode.value}
    >
      <Iconly name={icon.componentName} set={icon.set} />
    </StyledIcon>
  )
}

export default Icon
