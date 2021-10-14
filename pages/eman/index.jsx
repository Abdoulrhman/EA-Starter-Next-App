import React from 'react'
// import GridCard from '../../common/components/CardGrid'
// import CardInformation from '../../modules/vehicles/VehicleDetails/CardInformation/index'
// import Highlights from '../../modules/vehicles/VehicleDetails/Highlights'
// import Description from '../../modules/vehicles/VehicleDetails/Description'
// import Documents from '../../modules/vehicles/VehicleDetails/Documents'
// import Specifications from '../../modules/vehicles/VehicleDetails/Specifications'
// import MainSlider from '../../modules/vehicles/VehicleDetails/MainSlider'
import MainSection from '../../modules/home/Main'
import Intro from '../../modules/home/Intro'
import WorkSteps from '../../modules/home/howItWorks'
import DownloadApp from '../../modules/home/downloadApp'
import BiddedItems from '../../modules/home/biddedItems'
import Categories from '../../modules/home/categories'

function index() {
  return (
    <div>
      {/* <GridCard /> */}
      {/* <CardInformation /> */}
      {/* <Highlights /> */}
      {/* <Description /> */}
      {/* <Documents /> */}
      {/* <Specifications /> */}
      {/* <MainSlider /> */}
      {/* <Gallery /> */}
      <MainSection />
      <Intro />
      <WorkSteps />
      <DownloadApp />
      {/* <BiddedItems />
      <Categories /> */}
    </div>
  )
}

export default index
