import { memo } from 'react'
import { connectRefinementList } from 'react-instantsearch-dom'
import { Tabs } from '@components'
import { startCase } from 'lodash'
import { StyledContainer } from './styles'

const IconSets = ({ items, refine }) => {
  return (
    <StyledContainer>
      <Tabs hideDivider initialValue='bold' onChange={(value) => refine(value)}>
        {items.map((item, i) => (
          <Tabs.Item
            key={i}
            badgeText={item.label === 'curved' ? 'New' : ''}
            label={startCase(item.label)}
            value={item.label}
          />
        ))}
      </Tabs>
    </StyledContainer>
  )
}

const CustomRefinementList = connectRefinementList(memo(IconSets))

export default CustomRefinementList
