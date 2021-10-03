import React from 'react'
import styles from './styles.module.scss'

function PriceDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <p className={styles.title}>Current Price</p>
                <p className={styles.total}><sup>AED</sup>999,121,000</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.title}>Current Price</p>
                <p className={styles.increment}><sup>AED</sup>100</p>
            </div>
            <button className={styles.btnBid}>
                <img src="/assets/icons/Bid.svg" alt="Bid icon" />
                <p className={styles.btnText}>Bid Now</p>
            </button>
        </div>
    )
}

export default PriceDetails
