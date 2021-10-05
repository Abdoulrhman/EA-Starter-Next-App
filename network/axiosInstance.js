import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL

export default axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8', credentials: 'include' },
})
