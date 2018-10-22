import api from './AxiosConfig'


const signUp =  (data) => {
  return api.post('/users/user/signup',data)                  
}

const signIn =  (data) => {
return api.post('/auth/user/signin',data)                  
}

export default {
  signUp,
  signIn,
}