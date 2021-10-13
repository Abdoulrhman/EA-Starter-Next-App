import React, { useState } from 'react'
import styles from './styles.module.scss'

function PaymentSection(props) {
  const { Title, OptionGroups } = props.SectionData

  const [activePayment, setActivePayment] = useState(0)

  return (
    <div>
      <div className={styles.wrapper}>
        {/* Auction Grid */}
        <div className={styles.auctionGrid}>
          {/* Terms Section */}
          <div className={styles.auctionDetails}>
            <div className={styles.auctionDetailsHeader}>
              <h4>Payment Details</h4>
            </div>
            <div className={styles.auctionDetailsBody}>
              {/* Start Tabs */}
              <div className={styles.paymentTabs}>
                <ul className={styles.ul}>
                  {OptionGroups.map((o, index) => (
                    <li
                      className={
                        activePayment === index
                          ? styles.active
                          : styles.disabled
                      }
                      key={index}
                      onClick={() => setActivePayment(index)}
                    >
                      {o.Name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Start Tabs */}
              {OptionGroups.map((o, index) =>
                activePayment === index ? (
                  <React.Fragment key={index}>
                    <div className={styles.paymentInfo}>
                      <p>{o.Instruction}</p>
                      {o.Attributes
                        ? o.Attributes.map((attr, index) => (
                            <div className={styles.paymentDetails} key={index}>
                              <p>{attr.Key} :</p>
                              <p>{attr.Value}</p>
                            </div>
                          ))
                        : ''}
                    </div>
                    <div className={styles.paymentBtns}>
                      <button>Copy info</button>
                      <button>Share info</button>
                    </div>
                  </React.Fragment>
                ) : (
                  ''
                )
              )}
            </div>
          </div>
        </div>
        {/* Auction Grid */}
      </div>
    </div>
  )
}
export default PaymentSection
