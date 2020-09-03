import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 6000
})
export default service
