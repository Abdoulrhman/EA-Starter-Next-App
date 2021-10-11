import React from 'react'
import styles from './styles.module.scss'

function WorkSteps() {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <header>
          <h2>How it works</h2>
          <p>It’s extremely simple. Just join, set your bidding limit and start bidding.</p>
        </header>
        <div className={styles.cardsContainer}>
          <div className={styles.cardItem}>
            <div className={styles.cardIcon}>
              <img src="/assets/icons/works-sec-1.svg" alt="icon" />
            </div>
            <div className={styles.cardContent}>
              <h3>Set your bidding limit</h3>
              <p>Set your bidding limit to bid automatically till you reach the amount you've set. Never miss an item that you've set your eyes upon!</p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.cardIcon}>
              <img src="/assets/icons/works-sec-2.svg" alt="icon" />
            </div>
            <div className={styles.cardContent}>
              <h3>Start bidding on items</h3>
              <p>Choose an item to bid on from our diverse categories of items that we constantly auction.</p>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.cardIcon}>
              <img src="/assets/icons/works-sec-3.svg" alt="icon" />
            </div>
            <div className={styles.cardContent}>
              <h3>Checkout your winning bids</h3>
              <p>Checkout all of your won items and get it delivered to your doorstep.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default WorkSteps
