import { useContext } from 'react'
import { StyledIcon } from './styles'
import { IconDataContext } from '@lib/context'

const Icon = (icon) => {
  const { updateIcon } = useContext(IconDataContext)
  return (
    <StyledIcon
      onClick={() => updateIcon(icon)}
      dangerouslySetInnerHTML={{ __html: icon.svgPath }}
    />
  )
}

export default Icon
