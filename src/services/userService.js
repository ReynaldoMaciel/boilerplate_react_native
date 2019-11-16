import axios from 'axios'
import env from 'boilerplate_app/src/constants/enviroment'

export default {
  login: async (email, password) => {
    return axios
      .post(env.API_URL + '/user/login', {
        email,
        password,
      })
      .then(({ data }) => data)
  },
  register: async (name, email, password) => {
    return axios.post(env.API_URL + '/user/register', {
      name,
      email,
      password,
    })
  },
}
