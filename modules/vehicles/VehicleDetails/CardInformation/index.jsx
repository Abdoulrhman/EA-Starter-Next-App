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

function CardInformation(props) {
  // console.log('props info')
  // console.log(props)
  return (
    <div className={styles.container}>
      <div className={styles.spaces}>
        <div className={styles.head}>
          <Lot Lot={props.Lot} />
          <div className={styles.iconsContainer}>
            <Favourite />
            <PinIcon />
            <ShareIcon />
            <NotificationIcon />
          </div>
        </div>
        <h3 className={styles.cardTitle}>
          {`${props.Title} (${props.Year ? props.Year : ''} ${props.Year} ${
            props.Year
          })`}
        </h3>
        <CardTags />
        <Divider width="100%" height="1px" bgColor="#e4e8f0" margin="20px 0" />
        <MoreInfo
          Bids={props.Bids}
          StartDate={props.StartDate}
          EndDate={props.EndDate}
          Mileage={props.Mileage}
        />
      </div>
      <Calendar EndDateStr={props.EndDateStr} />
      <PriceDetails
        Currency={props.Currency}
        CurrentPrice={props.CurrentPrice}
        CurrentPriceStr={props.CurrentPriceStr}
      />
    </div>
  )
}

export default CardInformation
