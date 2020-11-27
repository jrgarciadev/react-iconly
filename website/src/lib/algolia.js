import algoliasearch from 'algoliasearch/lite'
import { ALGOLIA_ID, ALGOLIA_API_KEY } from './constants'

export default function getAlgoliaClient() {
  return algoliasearch(ALGOLIA_ID, ALGOLIA_API_KEY)
}
