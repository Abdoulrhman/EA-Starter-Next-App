import React, { useState } from 'react'
import styles from './styles.module.scss'

function CardFooter() {

    return (
        <div className={styles.cardFooter}>
            <div className={styles.itemContainer}>
                <img className={styles.footerImage} src="/assets/icons/bid-grey.svg" />
                <p className={styles.footerText}>367</p>
            </div>
            <div className={styles.itemContainer}>
                <img className={styles.footerImage} src="/assets/icons/clock.svg" />
                <p className={styles.footerText}>14d:11h:11m</p>
            </div>
        </div>
    )
}

export default CardFooter
