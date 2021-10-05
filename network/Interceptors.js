import axiosInstance from './axiosInstance'

const handleErrorInSuccessRequest = (res) => {
  console.log('handleErrorInSuccessRequest', res)
}

const responseErrorInterceptor = (error) => {
  console.log('responseErrorInterceptor', error)
}
const requestInterceptor = (req) => {
  console.log('responseErrorInterceptor', req)
}

export default () => {
  // For Response
  axiosInstance.interceptors.response.use(
    (res) => handleErrorInSuccessRequest(res),
    (error) => responseErrorInterceptor(error),
  )

  // For Request
  axiosInstance.interceptors.request.use((req) => requestInterceptor(req))
}

