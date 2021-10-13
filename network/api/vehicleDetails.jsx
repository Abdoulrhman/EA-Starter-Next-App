import axiosInstance from '../axiosInstance'

const vehicleDetails = (id, source) => axiosInstance.post('/api/Vehicle/VehicleDetails', {
  Id: id,
  Source: source,
  Lang: 'en',
})

export default { vehicleDetails }
