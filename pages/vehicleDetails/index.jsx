import React from 'react'
import { PropTypes } from 'prop-types'
import GridCard from '../../common/components/CardGrid'
import MainSlider from '../../modules/vehicles/VehicleDetails/MainSlider'
import CardInformation from '../../modules/vehicles/VehicleDetails/CardInformation/index'
import Highlights from '../../modules/vehicles/VehicleDetails/Highlights'
import Description from '../../modules/vehicles/VehicleDetails/Description'
import Documents from '../../modules/vehicles/VehicleDetails/Documents'
import Specifications from '../../modules/vehicles/VehicleDetails/Specifications'
import AskedSection from '../../modules/vehicles/VehicleDetails/AskedSection'
import CostSection from '../../modules/vehicles/VehicleDetails/CostSection'
import PaymentSection from '../../modules/vehicles/VehicleDetails/PaymentSection'
import ValueService from '../../modules/vehicles/VehicleDetails/ValueService'
import TermsAndConditions from '../../modules/vehicles/VehicleDetails/TermsAndConditions'
import Gallery from '../../modules/vehicles/VehicleDetails/Gallery/Gallery'
import INSPECTIONLOCATION from '../../modules/vehicles/VehicleDetails/INSPECTIONLOCATION/INSPECTIONLOCATION'
import DELIVERY from '../../modules/vehicles/VehicleDetails/DELIVERY/DELIVERY'

// import VehicleDetailsApi from '../../network/api/vehicleDetails'

function VehicleDetailsPage(props) {
  console.log(props)

  const {
    Lot,
    Bids,
    Mileage,
    StartDate,
    EndDate,
    EndDateStr,
    EndDateTimestamp,
    Currency,
    CurrentPrice,
    CurrentPriceStr,
    Sections,
    Title,
    ProviderName,
    Year = { Year },
  } = props.vehicleDetails.Data
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {/* <GridCard /> */}
          <MainSlider Images={Sections[6]} />
        </div>
        <div>
          <CardInformation
            Lot={Lot}
            Bids={Bids}
            Mileage={Mileage}
            StartDate={StartDate}
            EndDate={EndDate}
            EndDateStr={EndDateStr}
            EndDateTimestamp={EndDateTimestamp}
            Currency={Currency}
            CurrentPrice={CurrentPrice}
            CurrentPriceStr={CurrentPriceStr}
            Title={Title}
            Year={Year}
          />
        </div>
      </div>
      <div className="grid my-16 mx-8 gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          {Sections.map((section, index) => {
            if (index % 2 === 0) {
              switch (section.Title) {
                case 'HIGHLIGHTS':
                  return (
                    <Highlights
                      key={section.Id}
                      SectionData={section}
                      ProviderName={ProviderName}
                    />
                  )
                case 'SPECIFICATIONS OVERVIEW':
                  return (
                    <Specifications SectionData={section} key={section.Id} />
                  )
                case 'VEHICLE DESCRIPTION':
                  return <Description SectionData={section} key={section.Id} />
                case 'DOCUMENTS':
                  return <Documents SectionData={section} key={section.Id} />
                case 'PAYMENT DETAILS':
                  return (
                    <PaymentSection SectionData={section} key={section.Id} />
                  )
                case 'VALUE ADDED SERVICE':
                  return <ValueService SectionData={section} key={section.Id} />
                case 'GALLERY':
                  return <Gallery SectionData={section} key={section.Id} />
                case 'INSPECTION LOCATION':
                  return (
                    <INSPECTIONLOCATION
                      SectionData={section}
                      key={section.Id}
                    />
                  )
                case 'DELIVERY':
                  return <DELIVERY SectionData={section} key={section.Id} />
                case 'ESTIMATED COST':
                  return <CostSection SectionData={section} key={section.Id} />
                case 'TERMS AND CONDITIONS':
                  return (
                    <TermsAndConditions
                      SectionData={section}
                      key={section.Id}
                    />
                  )
                default:
                  return ''
              }
            }
          })}
        </div>
        <div>
          {Sections.map((section, index) => {
            if (index % 2 === 1) {
              switch (section.Title) {
                case 'HIGHLIGHTS':
                  return (
                    <Highlights
                      key={section.Id}
                      SectionData={section}
                      ProviderName={ProviderName}
                    />
                  )
                case 'SPECIFICATIONS OVERVIEW':
                  return (
                    <Specifications SectionData={section} key={section.Id} />
                  )
                case 'VEHICLE DESCRIPTION':
                  return <Description SectionData={section} key={section.Id} />
                case 'DOCUMENTS':
                  return <Documents SectionData={section} key={section.Id} />
                case 'PAYMENT DETAILS':
                  return (
                    <PaymentSection SectionData={section} key={section.Id} />
                  )
                case 'VALUE ADDED SERVICE':
                  return <ValueService SectionData={section} key={section.Id} />
                case 'GALLERY':
                  return <Gallery SectionData={section} key={section.Id} />
                case 'INSPECTION LOCATION':
                  return (
                    <INSPECTIONLOCATION
                      SectionData={section}
                      key={section.Id}
                    />
                  )
                case 'DELIVERY':
                  return <DELIVERY SectionData={section} key={section.Id} />
                case 'ESTIMATED COST':
                  return <CostSection SectionData={section} key={section.Id} />
                case 'TERMS AND CONDITIONS':
                  return (
                    <TermsAndConditions
                      SectionData={section}
                      key={section.Id}
                    />
                  )
                default:
                  return ''
              }
            }
          })}
          <AskedSection
            termdata={props.termdata}
            Title="FREQUENTLY ASKED QUESTIONS"
            EnableCollapse
            Collapsed={false}
          />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // try {
  //   const response = await VehicleDetailsApi.vehicleDetails(id, source)
  //   console.log({ response })
  // } catch (error) {
  //   console.log({ error })
  // }
  const res = await fetch(
    'http://eaapi2.dev.arabiansystems.com/api/Vehicle/VehicleDetails',
    {
      method: 'POST',
      body: JSON.stringify({
        Id: 222488,
        Source: '',
        Lang: 'en',
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const data = await res.json()

  const resp = await fetch(
    'http://eaapi2.dev.arabiansystems.com/api/Vehicle/ListFAQ',
    {
      method: 'POST',
      body: JSON.stringify({
        Source: '',
        Lang: 'en',
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const termdata = await resp.json()
  return {
    props: {
      vehicleDetails: data,
      termdata,
    },
  }
}

export default VehicleDetailsPage
