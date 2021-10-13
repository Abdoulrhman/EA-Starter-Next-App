import React from 'react'
import { getRemainingTime } from '../../../../../utils/TimeDate/timeDate'
import styles from './styles.module.scss'

function MoreInfo({Bids,StartDate , EndDate,            Mileage}) {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <img src="/assets/icons/Icons-Grey-bidding.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Bids</p>
          <p className={styles.text}>{Bids}</p>
        </div>
      </div>
      {
        Mileage ?      <div className={styles.itemContainer}>
        <img src="/assets/icons/odometer.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Milage</p>
          <p className={styles.text}>722,251 KM</p>
        </div>
      </div>
        :null
      }
      <div className={styles.itemContainer}>
        <img src="/assets/icons/grey-clock.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Time Remaining</p>
          {/* <p className={styles.text}>130D:22H:20M</p> */}
          {getRemainingTime(EndDate)}
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
