/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react'
import Filter from '../../modules/vehicles/vehiclesList/components/Filter/Filter'
import SearchSort from '../../common/components/SearchSort/SearchSort'
import BiddingUI from '../../modules/vehicles/vehiclesList/components/BiddingUI/BiddingUI'
import VALUEADDEDSERVICES from '../../modules/vehicles/vehiclesList/components/VehicleDetails/VALUEADDEDSERVICES/VALUEADDEDSERVICES'
import INSPECTIONLOCATION from '../../modules/vehicles/vehiclesList/components/VehicleDetails/INSPECTIONLOCATION/INSPECTIONLOCATION'
import DELIVERY from '../../modules/vehicles/vehiclesList/components/VehicleDetails/DELIVERY/DELIVERY'
import Gallery from '../../modules/vehicles/vehiclesList/components/VehicleDetails/Gallery/Gallery'
import BiddingUI2 from '../../modules/vehicles/vehiclesList/components/BiddingUI2/BiddingUI2'
import VehicleLandingPage from '../../modules/vehicles/vehiclesList/components/VehicleLandingPage/VehicleLandingPage'


function TestPage() {
  return (
    <div>
      <div>
        <Filter />
      </div>
      <div>
        <SearchSort />
        <BiddingUI />
        <BiddingUI2 />
        <VALUEADDEDSERVICES />
        <INSPECTIONLOCATION />
        <DELIVERY />
        <Gallery />
        <VehicleLandingPage />
      </div>
    </div>
  )
}

export default TestPage

