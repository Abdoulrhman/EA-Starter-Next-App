import React from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import CardTags from '../../../../common/components/Atoms/CardTags'
import Favourite from '../../../../common/components/Atoms/Favourite'
import Lot from '../../../../common/components/Atoms/Lot'
import Calendar from './Calendar'
import MoreInfo from './MoreInfo'
import NotificationIcon from './NotificationIcon'
import PinIcon from './PinIcon'
import PriceDetails from './PriceDetails'
import ShareIcon from './ShareIcon'
import styles from './styles.module.scss'

function CardInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.spaces}>
        <div className={styles.head}>
          <Lot />
          <div className={styles.iconsContainer}>
            <Favourite />
            <PinIcon />
            <ShareIcon />
            <NotificationIcon />
          </div>
        </div>
        <h3 className={styles.cardTitle}>2020 Lexus LX 570 9867</h3>
        <CardTags />
        <Divider width="100%" height="1px" bgColor="#e4e8f0" margin="20px 0" />
        <MoreInfo />
      </div>
      <Calendar />
      <PriceDetails />
    </div>
  )
}

export default CardInformation
