import { connectStateResults } from 'react-instantsearch-dom'
import { StyledContainer } from './styles'

const NoResults = ({ searchResults }) => {
  if (searchResults.nbHits !== 0) {
    return null
  }
  return (
    <StyledContainer>
      <p className='no-results-text'>
        No results for&nbsp;
        <span className='hightlighted'>{`"${searchResults.query}"`}</span>
      </p>
      <p className='icon-suggest'>
        Not finding an icon that you want?&nbsp;
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/jrgarciadev/react-iconly/issues'
        >
          File an issue
        </a>{' '}
        and suggest a new icon.
      </p>
    </StyledContainer>
  )
}

const CustomStateResults = connectStateResults(NoResults)

export default CustomStateResults
