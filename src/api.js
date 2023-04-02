import axios from 'axios'

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID oVAi7IajooZMx5VMu4eo1iAip8AtzNSYkQcUsxewa-g',
    },
    params: {
      query: 'dogs',
    },
  })

  return response
}

export default searchImages
