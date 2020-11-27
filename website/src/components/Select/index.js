import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { connectRefinementList } from 'react-instantsearch-dom'
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

const Select = ({
  theme,
  options = [],
  onSelectedOption,
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL
}) => {
  console.log({ items, isFromSearch, refine, searchForItems, createURL })
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (option) => () => {
    setSelectedOption(option)
    setIsOpen(false)
    if (typeof onSelectedOption === 'function') {
      onSelectedOption(option)
    }
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <SelectContainer>
        <SelectHeader onClick={toggling}>
          <span>
            {selectedOption?.name || options[0]?.name || 'Select an option..'}
          </span>
          <ChevronDown primaryColor={theme.colors.accent3} />
        </SelectHeader>
        <SelectListContainer isOpen={isOpen}>
          <SelectList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.key}>
                {option?.name}
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
  onSelectedOption: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string
    })
  )
}

const CustomRefinementList = connectRefinementList(Select)

export default withTheme(CustomRefinementList)
