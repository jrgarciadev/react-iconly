import { useContext } from 'react'
import { StyledIcon } from './styles'
import { IconDataContext } from '@lib/context'
import * as gtag from '@lib/gtag'

const Icon = (icon) => {
  const { updateIcon } = useContext(IconDataContext)
  const handleClick = () => {
    updateIcon(icon)
    gtag.event({ action: 'selected', category: 'icon', label: icon.name })
  }
  return (
    <StyledIcon
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: icon.svgPath }}
    />
  )
}

export default Icon
