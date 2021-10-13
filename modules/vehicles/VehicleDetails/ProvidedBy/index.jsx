import React from 'react'
import styles from './styles.module.scss'

const ProvidedBy = ({ ProviderName }) => {
  return (
    <div className={[styles.container, 'mb-8'].join(' ')}>
      <div className={styles.head}>
        <p className={styles.headTitle}>This car is provided by</p>
        <p className={styles.headValue}>{ProviderName}</p>
      </div>
    </div>
  )
}

export default ProvidedBy
