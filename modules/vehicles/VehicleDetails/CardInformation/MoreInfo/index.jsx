import React from 'react'
import styles from './styles.module.scss'

function MoreInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <img src="/assets/icons/Icons-Grey-bidding.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Bids</p>
          <p className={styles.text}>37</p>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <img src="/assets/icons/odometer.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Milage</p>
          <p className={styles.text}>722,251 KM</p>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <img src="/assets/icons/grey-clock.svg" alt="bid icon" />
        <div>
          <p className={styles.title}>Time Remaining</p>
          <p className={styles.text}>130D:22H:20M</p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
