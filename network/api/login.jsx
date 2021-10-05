import axiosInstance from '../axiosInstance'


const loginNew = (username, password) => axiosInstance.post('/api/Account/Login', {
  UserName: username,
  Password: password,
  Lang: 'en',
})

export default { loginNew }
