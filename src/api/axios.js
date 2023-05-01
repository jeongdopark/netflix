import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '04c2d92afc3022f683ebea2a2ce3652f',
    language: 'ko-KR',
  },
})

export default instance
