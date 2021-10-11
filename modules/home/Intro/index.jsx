import React from 'react'
import styles from './styles.module.scss'

function Intro() {
  return (
    <div className={styles.container}>
      <header>
        <h2>Who we are</h2>
        <p>Emirates Auctions is an electronic platform that provides services to suppliers and buyers</p>
      </header>
      <div className={styles.cardsContainer}>
        <div className={styles.cardItem}>
          <div className={styles.iconContainer}>
            <img src="/assets/icons/who-sec-1.svg" alt="icon" />
          </div>
          <div className={styles.cardContent}>
            <h3>Governance and Transparency</h3>
            <ul>
              <li>Customers have easy access to the auction</li>
              <li>Preferred strategic partner for all courts, governments and banks</li>
              <li>Platform that maximizes supplier sales revenue and eliminates pre- sale agents risk</li>
            </ul>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.iconContainer}>
            <img src="/assets/icons/who-sec-2.svg" alt="icon" />
          </div>
          <div className={styles.cardContent}>
            <h3>Governance and Transparency</h3>
            <ul>
              <li>Customers have easy access to the auction</li>
              <li>Preferred strategic partner for all courts, governments and banks</li>
              <li>Platform that maximizes supplier sales revenue and eliminates pre- sale agents risk</li>
            </ul>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.iconContainer}>
            <img src="/assets/icons/who-sec-3.svg" alt="icon" />
          </div>
          <div className={styles.cardContent}>
            <h3>Governance and Transparency</h3>
            <ul>
              <li>Customers have easy access to the auction</li>
              <li>Preferred strategic partner for all courts, governments and banks</li>
              <li>Platform that maximizes supplier sales revenue and eliminates pre- sale agents risk</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
