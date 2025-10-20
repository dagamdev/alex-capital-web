import { API_URL } from '@/utils/constants'
import axios from 'axios'

export const api = axios.create({
  baseURL: API_URL
})

api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.patch['Content-Type'] = 'application/json'

api.interceptors.response.use(
  (response) => response,
  (error) => console.log('Error in api: ', error)
)

export const authApi = api.create()

authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access-token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }, 
  Promise.reject
)
