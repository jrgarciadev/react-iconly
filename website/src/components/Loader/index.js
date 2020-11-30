import { connectStateResults } from 'react-instantsearch-dom'
import { StyledLoader } from './styles'

const Loader = connectStateResults(({ isSearchStalled }) =>
  isSearchStalled ? <StyledLoader /> : null
)

export default Loader
