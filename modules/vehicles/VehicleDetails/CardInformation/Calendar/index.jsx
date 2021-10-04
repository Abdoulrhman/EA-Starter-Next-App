import React from 'react'
import styles from './styles.module.scss'

function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <img src="/assets/icons/Grey_Calendar_ic.svg" alt="calendar icon" />
        <div>
          <p className={styles.title}>End date</p>
          <p className={styles.text}>20 May, 01:00pm (GST)</p>
        </div>
      </div>
      <button className={styles.btnNotify} type="button">
        <img src="/assets/icons/Notification-black.svg" alt="Notification icon" />
        <p className={styles.btnText}>Notify me</p>
      </button>
    </div>
  )
}

export default Calendar
