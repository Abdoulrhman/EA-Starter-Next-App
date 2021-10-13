import React from 'react'
// eslint-disable-next-line import/no-unresolved
import styles from './styles.module.scss'


const NumberHome = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>Emirates Auctions in numbers</h1>
      <p>Some of our milestones in the history of Emirates Auction</p>
    </div>
    <div className={styles.ServiceBody}>
      <div className={styles.content}>
        <div className={styles.card_icon}>
          <div className={styles.iconIcon}>
            <img src="/assets/images/car-compact-copy.png" />
          </div>
          <h5>72,000+</h5>
          <p>vehicles & plant sold</p>
        </div>
        <div className={styles.card_icon}>
          <div className={styles.iconIcon}>
            <img src="/assets/images/group-32.png" />
          </div>
          <h5>72,000+</h5>
          <p>vehicles & plant sold</p>
        </div>
        <div className={styles.card_icon}>
          <div className={styles.iconIcon}>
            <img src="/assets/images/group-31.png" />
          </div>
          <h5>72,000+</h5>
          <p>vehicles & plant sold</p>
        </div>
        <div className={styles.card_icon}>
          <div className={styles.iconIcon}>
            <img src="/assets/images/icons-statistics-downloads.png" />
          </div>
          <h5>72,000+</h5>
          <p>vehicles & plant sold</p>
        </div>
        <div className={styles.card_icon}>
          <div className={styles.iconIcon}>
            <img src="/assets/images/group-3.png" />
          </div>
          <h5>72,000+</h5>
          <p>vehicles & plant sold</p>
        </div>
      </div>
    </div>
  </div>
)

export default NumberHome
