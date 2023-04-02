import axios from 'axios'
import API_KEY from './private/API_KEY'

const searchImages = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query: searchTerm,
    },
  })

  console.log(response)
  return response.data.results
}

export default searchImages
