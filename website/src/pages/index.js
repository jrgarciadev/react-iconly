import { Intro, Search } from '@components'
import getAlgoliaClient from '@lib/algolia'
import { InstantSearch, Highlight, Hits } from 'react-instantsearch-dom'
import { ALGOLIA_INDEX_NAME } from '@lib/constants'

const searchClient = getAlgoliaClient()

const Home = () => (
  <>
    <Intro />
    <InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>
      <Search />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </>
)

function Hit({ hit }) {
  console.log(hit.name)
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: hit.svgPath }} />
      <div className='hit-name'>
        <Highlight attribute='name' hit={hit} />
      </div>
    </div>
  )
}

export default Home
