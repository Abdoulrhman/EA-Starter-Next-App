/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import styles from './styles.module.scss'

const DELIVERY = () => (
  <div className={styles.Delivery}>
    <div className={styles.ServiceHeader}>
      <h1>Delivery</h1>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14.13" height="8.916" viewBox="0 0 14.13 8.916"><path className={styles.a} d="M8.711,8.685a.651.651,0,0,1-1,0L1.3,1.07A.651.651,0,0,1,1.8,0H14.625a.651.651,0,0,1,.5,1.07Z" transform="translate(15.278 8.916) rotate(180)" /></svg>
      </div>
    </div>
    <div className={styles.ServiceBody}>
      <div>
        <div className={styles.loctionFlex}>
          <div>
            <p>Once you win the bid, you will have the option to get the item delivered to you for an additional cost.</p>
            <span>Working Hours</span>
            <h5>From 9:00am to 6:00pm</h5>
          </div>
          <div>
            <p className={styles.textColor}>"open"</p>
          </div>
        </div>

        <div className={styles.flexDelivery}>
          <div>
            <h6 className={styles.headingDelivery}>Estimated Total :</h6>
          </div>
          <div>
            <h6>
              <span className={styles.span1Delivery}>AED</span>
              <span className={styles.span2Delivery}>450</span>
            </h6>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default DELIVERY
