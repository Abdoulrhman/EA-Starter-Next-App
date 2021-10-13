import axiosInstance from '../axiosInstance'

export const getVehicleDetails = (id, source) =>
  axiosInstance.post('/api/Vehicle/VehicleDetails', {
    Id: id,
    Source: source,
    Lang: 'en',
  })
