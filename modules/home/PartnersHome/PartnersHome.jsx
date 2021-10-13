/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.scss'

const settings = {
  dots: true,
  arrow: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={styles.btnNext}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    > <img className={styles.img_btn2} src="/assets/images/group-4.png" />
    </div>

  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={styles.btnNext}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    > <img className={styles.img_btn} src="/assets/images/group-4-copy.png" />
    </div>
  )
}
const PartnersHome = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>Partners</h1>
      <p>Sample Of Our Success Partners</p>
    </div>
    <div className={styles.ServiceBody}>
      <div className={styles.content} />
      <Slider {...settings}>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/logos.jpg" width="100%" className="card-img-top" alt="..." />
          </div>
        </div>

      </Slider>
    </div>
  </div>
)

export default PartnersHome
