import React from 'react'
import styles from './styles.module.scss'

function DownloadApp() {
  return (
    <div className={styles.container}>
      <header>
        <h2>Keep Bidding!</h2>
        <p>Find us on all platforms, for your convenience.</p>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src="/assets/images/car.png" alt="mockup" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Download our app and keep on bidding!</h3>
          <p className={styles.subTitle}>Get an optimized experience and enjoy bidding using our Emirates Auctions app on Android and iOS devices.</p>
          <div className={styles.btnsContainer}>
            <button className={styles.googleBtn}>
              <img src="/assets/icons/arrow-left.svg" alt="google play button" />
            </button>
            <button className={styles.appleBtn}>
              <img src="/assets/icons/arrow-right.svg" alt="apple store button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
