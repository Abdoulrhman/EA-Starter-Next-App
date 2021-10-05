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
            <h4>ESTIMATED COST</h4>
          </div>
          <div className={styles.auctionDetailsBody}>
            {/* start Accordion */}
            <div className={styles.auctionAccordion}>
              <div className={styles.auctionAccordionHeader}>
                <span className={styles.costInfo}>Current Bid :</span>
                <span className={styles.costNumber}>AED 200</span>
              </div>

              <div className={styles.auctionAccordionHeader}>
                <span className={styles.costInfo}>Current Bid :</span>
                <span className={styles.costNumber}>AED 200</span>
              </div>
              <div className={styles.auctionAccordionBody}>
                <div className={styles.total}>
                  <span className={styles.totalInfo}>Current Bid :</span>
                  <span className={styles.totalNumber}>AED 200</span>
                </div>
              </div>
            </div>
            {/* start Accordion */}
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
