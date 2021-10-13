import React from 'react'
import styles from './styles.module.scss'

function MainSection() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find items and Bid now</h1>
        <p className={styles.subTitle}>We have auctioned over 100,000 vehicles, 4500 properties and millions of other stuff.</p>
        <div className={styles.inputContainer}>
          <input type="search" placeholder="Search..." />
        </div>
        <button className={styles.btnSearch} type="button">Search</button>
      </div>
    </main>
  )
}

export default MainSection
