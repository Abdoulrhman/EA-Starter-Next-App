import React from 'react'
import styles from './styles.module.scss'

function PriceDetails({Currency, CurrentPrice, CurrentPriceStr}) {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <p className={styles.title}>Current Price</p>
        <p className={styles.total}>
          <sup>{Currency}</sup>
          {CurrentPriceStr}
        </p>
      </div>
      <div className={styles.itemContainer}>
        <p className={styles.title}>Current Price</p>
        <p className={styles.increment}>
          <sup>{Currency}</sup>
          {CurrentPrice}
        </p>
      </div>
      <button className={styles.btnBid} type="button">
        <img src="/assets/icons/Bid.svg" alt="Bid icon" />
        <p className={styles.btnText}>Bid Now</p>
      </button>
    </div>
  )
}

export default PriceDetails
