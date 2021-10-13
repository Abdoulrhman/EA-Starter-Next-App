import React from 'react'
import styles from './styles.module.scss'

function Calendar({EndDateStr}) {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <img src="/assets/icons/Grey_Calendar_ic.svg" alt="calendar icon" />
        <div>
          <p className={styles.title}>End date</p>
          <p className={styles.text}>{EndDateStr} (GST)</p>
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
