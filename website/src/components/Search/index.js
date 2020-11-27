import { Search as SearchIcon } from 'react-iconly'
import { Select } from '@components'
import { withTheme } from 'styled-components'
import { connectSearchBox } from 'react-instantsearch-dom'
import {
  StyledForm,
  StyledIconContainer,
  StyledInput,
  StyledSelectContainer
} from './styles'

const Search = ({ theme, currentRefinement, isSearchStalled, refine }) => {
  const options = [
    {
      key: 'all',
      name: 'All'
    },
    {
      key: 'light',
      name: 'Light'
    },
    {
      key: 'bold',
      name: 'Bold'
    },
    { key: 'bulk', name: 'Bulk' },
    { key: 'broken', name: 'Broken' },
    { key: 'two-tone', name: 'Two Tone' }
  ]
  return (
    <StyledForm noValidate action='' role='search'>
      <StyledIconContainer>
        <SearchIcon primaryColor={theme.colors.accent3} />
      </StyledIconContainer>
      <StyledInput
        autoFocus
        type='search'
        focusShortcuts={['s', '/']}
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder='Search icon...'
      />
      <StyledSelectContainer>
        <Select attribute='set' options={options} />
      </StyledSelectContainer>
    </StyledForm>
  )
}

const CustomSearchBox = connectSearchBox(Search)

export default withTheme(CustomSearchBox)
