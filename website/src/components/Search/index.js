import { Search as SearchIcon } from 'react-iconly'
import { Select } from '@components'
import { withTheme } from 'styled-components'
import {
  StyledForm,
  StyledIconContainer,
  StyledInput,
  StyledSelectContainer
} from './styles'

const Search = ({ theme }) => {
  const options = ['All', 'Light', 'Bold', 'Bulk', 'Broken', 'Two Tone']
  return (
    <StyledForm>
      <StyledIconContainer>
        <SearchIcon primaryColor={theme.colors.accent3} />
      </StyledIconContainer>
      <StyledInput type='text' placeholder='Search...' />
      <StyledSelectContainer name='set' id='sets'>
        <Select options={options} />
      </StyledSelectContainer>
    </StyledForm>
  )
}

export default withTheme(Search)
