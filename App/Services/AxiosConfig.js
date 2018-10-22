import axios from 'axios'
import AppConfig from '../Config/AppConfig'

const api = axios.create({
  baseURL: `${AppConfig.serverURL}`,
  timeout: 10000,
})

api.interceptors.response.use((response) => {
  if(__DEV__) {
    console.log('res ', response.data)
  }
  return response.data
},
(error) => {
  if (error.response) {
    if(__DEV__) {
      console.log('error ', error.response) 
    }

    // error.response.data.errors.statusCode = error.response.status
    return Promise.reject(error.response)
  } else if (error.request) return Promise.reject({ common: 'No response was received' })
  return Promise.reject({ common: error.message })
})

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(__DEV__) {
    console.log('config ', config) 
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})


export function setAuthorizationToken(token) {
  api.defaults.headers.common.Authorization = token
}


export default api