import React from 'react'
import styles from './styles.module.scss'

const Error = () => (
  <div>
    <div className={styles.wrapper}>
      <div className={styles.auction}>
        <div className={styles.auctionBody}>
          <img src="../assets/images/Attention.svg" />
        </div>
        <div className={styles.auctionHeader}>
          <h3>Error 401</h3>
          <p>you are not authorized to access this page</p>
        </div>
      </div>
    </div>
  </div>
)

export default Error
