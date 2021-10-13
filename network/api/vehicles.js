import axiosInstance from '../axiosInstance'

export const getAllVehiclesList = () =>
  axiosInstance.post('/api/Vehicle/ListVehicle', {
    IsDesc: true,
    OrderByColumn: '',
    PageSize: 0,
    PageIndex: 0,
    SearchKey: '',
    Source: 'web',
    Lang: 'en',
  })

export const test = (username, password) =>
  axiosInstance.post('/api/Account/Login', {
    UserName: username,
    Password: password,
    Lang: 'en',
  })
