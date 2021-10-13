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
                  {/* <li className={styles.active}>Emirates Islamic Bank</li>
                  <li className={styles.disabled}>Emirates Islamic Bank</li>
                  <li className={styles.disabled}>Emirates Islamic Bank</li>
                  <li className={styles.disabled}>Emirates Islamic Bank</li>
                  <li className={styles.disabled}>Emirates Islamic Bank</li> */}
                </ul>
              </div>
              {/* Start Tabs */}
              {OptionGroups.map((o, index) =>
                activePayment === index ? (
                  <React.Fragment key={index}>
                    <div className={styles.paymentInfo}>
                      {/* <li className={activePayment===index?styles.active:styles.disabled} >
                      {o.Name}
                    </li> */}
                      <p>{o.Instruction}</p>
                      {o.Attributes
                        ? o.Attributes.map((attr, index) => (
                            <div className={styles.paymentDetails} key={index}>
                              <p>{attr.Key} :</p>
                              <p>{attr.Value}</p>
                            </div>
                          ))
                        : ''}
                      {/* <div className={styles.paymentDetails}>
                    <p>Loading / unloading Fees :</p>
                    <p>Emirates Auction</p>
                  </div>
                  <div className={styles.paymentDetails}>
                    <p>Loading / unloading Fees :</p>
                    <p>Emirates Auction</p>
                  </div> */}
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
              {/* <div className={styles.paymentInfo}>
                  <p>
                    You can make the payment through bank deposit or bank transfer.
                    Please send us a copy of the transfer receipt and mention any of
                    the won cars to: cs@emiratesauction.com.
                  </p>
                  <div className={styles.paymentDetails}>
                    <p>Loading / unloading Fees :</p>
                    <p>Emirates Auction</p>
                  </div>
                  <div className={styles.paymentDetails}>
                    <p>Loading / unloading Fees :</p>
                    <p>Emirates Auction</p>
                  </div>
                </div> */}
              {/* <div className={styles.paymentBtns}>
                  <button>Copy info</button>
                  <button>Share info</button>
                </div> */}
            </div>
          </div>
          {/* Terms Section */}
          {/* Terms Section */}
          {/* <div className={styles.auctionDetails}>
            <div className={styles.auctionDetailsHeader}>
              <h4>TERMS AND CONDITIONS</h4>
            </div>
            <div className={styles.auctionDetailsBody} />
          </div> */}
          {/* Terms Section */}
        </div>
        {/* Auction Grid */}
      </div>
    </div>
  )
}
export default PaymentSection
