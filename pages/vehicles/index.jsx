import React from 'react'
import GridCard from '../../common/components/CardGrid'
import { getAllVehiclesList } from '../../network/api/vehicles'


export async function getServerSideProps(context) {
  console.log({ context })

  const response = await getAllVehiclesList()


  if (!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: { vehicles: response.data }, // will be passed to the page component as props
  }
}

function VehiclesPage({ vehicles }) {
  const {
    Data, AuctionTypeId, Pinned, TotalCount,
  } = vehicles
  console.log({ vehicles })
  return (


    <div className=" min-h-screen flex flex-col">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {Data.map((vehicleData) => (<GridCard vehicleData={vehicleData} />))}
      </div>

    </div>

  )
}

export default VehiclesPage
