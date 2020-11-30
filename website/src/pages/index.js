import {
  Intro,
  Search,
  IconGrid,
  IconDetail,
  CheckboxList,
  Loader
} from '@components'
import getAlgoliaClient from '@lib/algolia'
import { InstantSearch } from 'react-instantsearch-dom'
import { ALGOLIA_INDEX_NAME } from '@lib/constants'
import IconData from '@lib/context'

const searchClient = getAlgoliaClient()

const Home = () => (
  <IconData>
    <Intro />
    <InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>
      <Search />
      <CheckboxList attribute='set' />
      <Loader />
      <IconGrid />
    </InstantSearch>
    <IconDetail />
  </IconData>
)

export default Home
