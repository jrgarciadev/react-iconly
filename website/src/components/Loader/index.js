import { useEffect, useState } from 'react';
import { connectStateResults } from 'react-instantsearch-dom'
import { StyledLoader } from './styles'

const SPINNER_DELAY = 200 // ms

const Loader = connectStateResults(({ isSearchStalled }) => {
  const [canShowSpinner, setCanShowSpinner] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCanShowSpinner(true);
    }, SPINNER_DELAY)
  }, [canShowSpinner, setCanShowSpinner])

  return canShowSpinner && isSearchStalled ? <StyledLoader /> : null
});

export default Loader
