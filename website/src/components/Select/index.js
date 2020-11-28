import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {
  connectRefinementList,
  connectCurrentRefinements
} from 'react-instantsearch-dom'
import {
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  StyledListItem
} from './styles'
import { ChevronDown } from 'react-iconly'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const ListItem = ({ items, refine, item, onItemClick }) => {
  const handleClick = () => {
    refine(items)
    onItemClick(item)
  }

  return (
    <StyledListItem onClick={handleClick} disabled={!items.length}>
      {item?.label}
    </StyledListItem>
  )
}

const CustomListItem = connectCurrentRefinements(ListItem)

const Select = ({ theme, items, refine }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const toggling = () => setIsOpen(!isOpen)

  const onItemSelected = (item) => {
    setSelectedItem(item)
    setIsOpen(false)
    console.log(item)
    refine(item.value)
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <SelectContainer>
        <SelectHeader onClick={toggling}>
          <span>{selectedItem?.label || items[0]?.label}</span>
          <ChevronDown primaryColor={theme.colors.accent3} />
        </SelectHeader>
        <SelectListContainer isOpen={isOpen}>
          <SelectList>
            {items.map((item) => (
              <CustomListItem
                item={item}
                onItemClick={onItemSelected}
                key={item.label}
              />
            ))}
          </SelectList>
        </SelectListContainer>
      </SelectContainer>
    </OutsideClickHandler>
  )
}

Select.propTypes = {
  theme: PropTypes.object
}

const CustomRefinementList = connectRefinementList(Select)

export default withTheme(CustomRefinementList)
