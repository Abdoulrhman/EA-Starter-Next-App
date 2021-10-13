import React from 'react'
import Slider from 'react-slick'
import GridCard from '../../../common/components/CardGrid'
import styles from './styles.module.scss'

function BiddedItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={styles.container}>
      <header>
        <h2>Most Bidded Items</h2>
        <p>Join the competition on most attractive items</p>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.head}>
          <p>Choose the category</p>
          <button>choose</button>
        </div>
        <div className={styles.cardsContainer}>
          <div className="cardItem">
            <Slider {...settings}>
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
              <GridCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiddedItems
