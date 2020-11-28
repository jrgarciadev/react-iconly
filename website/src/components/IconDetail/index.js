import { useContext } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { IconDataContext } from '@lib/context'
import { StyledContainer } from './styles'

const IconDetail = () => {
  const { icon, removeIcon } = useContext(IconDataContext)
  return (
    <OutsideClickHandler onOutsideClick={removeIcon}>
      <StyledContainer isOpen={icon !== null}>
        <h1>{icon?.name}</h1>
      </StyledContainer>
    </OutsideClickHandler>
  )
}

export default IconDetail
