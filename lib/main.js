import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'

RedditApi.load()
  .then(ExtractGifs)

export default {}
