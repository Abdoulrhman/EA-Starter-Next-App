import React from 'react'
import styles from './styles.module.scss'

const NoAuction = () => (
  <div>
    <div className={styles.wrapper}>
      {/* Auction Grid */}
      <div className={styles.auctionGrid}>
        {/* Terms Section */}
        <div className={styles.auctionDetails}>
          <div className={styles.auctionDetailsHeader}>
            <h4>TERMS AND CONDITIONS</h4>
          </div>
          <div className={styles.auctionDetailsBody}>
            <div className={styles.auctionTerms}>
              <p>
                Emirates Auction’s terms and conditions of public auction
                shall apply, along with the following terms and conditions:
              </p>
              <p>
                1- Administrative fees shall apply to each lot as follows: 300
                AED if the sale price of the lot is 2000 AED or less, or 500
                AED if the sale price of the lot exceeds 2000 AED.
              </p>
              <p>
                2- You must complete payment of the Lot within 48 hours of the
                date of the auction’s conclusion, after acquiring the
                supplier’s approval.
              </p>
              <p>
                3- Winner has to collect the auction item from the providers
                premises.
              </p>
              <p>
                4- Emirates Auction reserves the right to apply fees of 100AED
                for each delay, without prior notice, for any vehicle not paid
                or received within the specified period
              </p>
              <p>
                5- Documents of the lot would be ready within 10 working days
                after approval and payment.
              </p>
            </div>
          </div>
        </div>
        {/* Terms Section */}
        {/* Terms Section */}
        <div className={styles.auctionDetails}>
          <div className={styles.auctionDetailsHeader}>
            <h4>TERMS AND CONDITIONS</h4>
          </div>
          <div className={styles.auctionDetailsBody} />
        </div>
        {/* Terms Section */}
      </div>
      {/* Auction Grid */}
    </div>
  </div>
)

export default NoAuction
