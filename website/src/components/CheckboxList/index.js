import { connectRefinementList } from 'react-instantsearch-dom'
import { Checkbox } from '@components'
import { startCase } from 'lodash'
import { StyledContainer } from './styles'

const CheckboxList = ({ items, refine }) => {
  return (
    <StyledContainer>
      {items.map((item) => (
        <Checkbox
          checked={item.isRefined}
          name={item.label}
          label={startCase(item.label)}
          onChange={() => refine(item.value)}
          key={item.label}
        />
      ))}
    </StyledContainer>
  )
}

const CustomRefinementList = connectRefinementList(CheckboxList)

export default CustomRefinementList
