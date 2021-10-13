/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
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
const NewsHome = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>News</h1>
      <p>Stay in the know about what's happening with Emirates Auctions</p>
    </div>
    <div className={styles.ServiceBody}>
      <div className={styles.content} />
      <Slider {...settings}>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPcvwvTJmYLmVYy0J0vw8N5Zq_ZwnvE1Tww&usqp=CAU" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <h5 className={styles.card_title}>Ajman Plates Number</h5>
              <p className={styles.card_text}>These very distinguished car number plates for Ajman are available for immediate purchase through our applications or website.</p>
              <a href="#" className={styles.btnGallery}>Read More</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
)

export default NewsHome
