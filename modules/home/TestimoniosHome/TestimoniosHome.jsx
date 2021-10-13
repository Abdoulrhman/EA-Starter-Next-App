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
  slidesToShow: 1,
  slidesToScroll: 1,

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
const TestimoniosHome = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>Testimonios</h1>
      <p>What our clients says</p>
    </div>
    <div className={styles.ServiceBody}>
      <div className={styles.content} />
      <Slider {...settings}>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <img src="/assets/images/our-mission-img.png" width="100%" className="card-img-top" alt="..." />
            <div className={styles.card_body}>
              <p className={styles.card_text}>“LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book”</p>
              <h5 className={styles.card_title}>- Abdallah Elmanah - Business owner</h5>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
)

export default TestimoniosHome
