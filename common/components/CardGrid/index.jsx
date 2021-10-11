import React, { useState } from 'react'
import styles from './styles.module.scss'
import CardTags from './CardTags'
import CardFooter from './CardFooter'
import Bid from './Bid'
import Favourite from './Favourite'
import Lot from './Lot'
import Menu from './Menu'

function GridCard({ vehicleData }) {
  const { Tags } = vehicleData
  const [lang, setLang] = useState(true)
  const handleClick = () => {
    setLang(!lang)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardMedia}>
          <Favourite
            top="10px"
            left={lang && '10px'}
            right={!lang && '10px'}
            dir={lang ? 'ltr' : 'rtl'}
          />
          <img
            className={styles.cardImage}
            src="/assets/images/car.png"
            alt="car"
          />
          <Lot bottom="12px" left={lang && '0px'} right={!lang && '0px'} />
          <Bid
            bottom="-20px"
            left={!lang && '10px'}
            right={lang && '10px'}
            dir={lang ? 'ltr' : 'rtl'}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={lang ? styles.cardTitle : styles.cardTitleAr}>
            {vehicleData?.Title}
          </h3>
          <CardTags Tags={Tags} dir={lang ? 'ltr' : 'rtl'} />
          <p className={lang ? styles.cardPrice : styles.cardPriceAr}>
            <span>{vehicleData?.Currency}</span>
            {vehicleData?.CurrentPrice}
          </p>
          <div
            style={{ direction: lang ? 'ltr' : 'rtl' }}
            className={styles.cardFooterContainer}
          >
            <CardFooter dir={lang ? 'ltr' : 'rtl'} />
            <Menu dir={lang ? 'ltr' : 'rtl'} />
          </div>
        </div>
      </div>
      {/* for test */}
      {/* <button onClick={handleClick}>Test Lang</button> */}
    </>
  )
}

export default GridCard
