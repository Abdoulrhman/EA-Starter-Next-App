/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import styles from './styles.module.scss'
import Categories from './Categories/Categories'
import SliderLandingPage from './SliderLandingPage/SliderLandingPage'
import RecentlyAddedCars from './RecentlyAddedCars/RecentlyAddedCars'

function VehicleLandingPage() {
  // const classes = useStyles();
  return (
    <div className={styles.Landing}>
      <div className={styles.widthSection}>
        <SliderLandingPage />
        <Categories />
        <RecentlyAddedCars />
      </div>
      <div className={styles.widthSection} />
    </div>
  )
}

export default VehicleLandingPage
