import { API_URL } from '@/utils/constants'
import axios from 'axios'

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.patch['Content-Type'] = 'application/json'

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response.data.message !== 'Unauthorized') console.log('Error in api: ', error.response.data.message)
  }
)
