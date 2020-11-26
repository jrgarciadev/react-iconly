import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  ListItem
} from './styles'
import { ChevronDown } from 'react-iconly'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const Select = ({ theme, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log({ selectedOption })
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <SelectContainer>
        <SelectHeader onClick={toggling}>
          <span>{selectedOption || options[0] || 'Select an option..'}</span>{' '}
          <ChevronDown primaryColor={theme.colors.accent3} />
        </SelectHeader>
        <SelectListContainer isOpen={isOpen}>
          <SelectList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </SelectList>
        </SelectListContainer>
      </SelectContainer>
    </OutsideClickHandler>
  )
}

Select.propTypes = {
  theme: PropTypes.object,
  options: PropTypes.array
}

export default withTheme(Select)
