import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import useMediaQuery from '@mui/material/useMediaQuery'
import MagicSliderDots from 'react-magic-slider-dots'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImageGallery from 'react-image-gallery'
import styles from './styles.module.scss'
import 'react-magic-slider-dots/dist/magic-dots.css'
import { getImageUrl } from '../../../../utils/ImageFormat/imageFormat'

// import RightArrow from '/assets/icons/arrow-right.svg'
// import LeftArrow from '/assets/icons/arrow-left.svg'

function MainSlider(props) {
  const [mainImage, setMainImage] = useState(0)
  const [open, setOpen] = useState(false)
  const screen = useRef(null)
  const slider1 = useRef()
  const slider2 = useRef()
  const RightArrow = '/assets/icons/arrow-right.svg'
  const LeftArrow = '/assets/icons/arrow-left.svg'
  const matches = useMediaQuery('(min-width:500px)')
  const SlickArrowFix = ({ currentSlide, slideCount, children, ...props }) => (
    <img src={children.type} {...props} />
  )
  console.log(props)
  const imagesArray = props.Images.OptionGroups.map((obj) => obj.Images[0])
  console.log(imagesArray)
  const [Imgs, setImgs] = useState(imagesArray)

  const handleOpen = (i) => {
    setOpen(true)
    setMainImage(i)
    setTimeout(() => {
      screen.current.fullScreen()
    }, 0)
  }

  console.log(setImgs)

  const settings1 = {
    // rtl: localStorage.getItem('lang') == 'ar',
    swipe: true,
    arrows: false,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    // asNavFor: nav2,
    easing: 'ease-out',
    ref: (slider) => (slider1.current = slider),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          arrows: false,
          appendDots: (dots) => (
            <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
          ),
        },
      },
    ],
  }

  const settings2 = {
    // asNavFor: nav1,
    // rtl: localStorage.getItem('lang') == 'ar',
    slidesToShow: 5,
    swipeToSlide: false,
    focusOnSelect: true,
    arrows: true,
    easing: 'ease-out',
    infinite: false,
    ref: (slider) => (slider2.current = slider),
    nextArrow: (
      <SlickArrowFix>
        <RightArrow />
      </SlickArrowFix>
    ),
    prevArrow: (
      <SlickArrowFix>
        <LeftArrow />
      </SlickArrowFix>
    ),
  }

  return (
    <div>
      <Slider {...settings1}>
        {Imgs.map((img, i) => (
          <div
            key={img}
            className={styles.mainImageContainer}
            onClick={(e) => {
              e.preventDefault()
              handleOpen(i)
            }}
          >
            <img
              alt="vehiclee image"
              src={getImageUrl(img.ImageLink, 600, 386)}
              className={styles.mainImage}
            />
            <div className={styles.overlay} />
          </div>
        ))}
      </Slider>
      {matches && (
        <Slider {...settings2} className={styles.bottomSlider}>
          {Imgs.map((img, i) => (
            <img
              key={img}
              onClick={() => {
                setMainImage(i)
                slider1.current.slickGoTo(i)
              }}
              alt="vehicle thumbnail"
              src={getImageUrl(img.ImageLink, 600, 386)}
              className={styles.smallImgSliders}
            />
          ))}
        </Slider>
      )}
      {open && (
        <div>
          <ImageGallery
            onScreenChange={(e) => setOpen(e)}
            ref={screen}
            showPlayButton={false}
            startIndex={mainImage}
            isRTL={false}
            slideOnThumbnailOver
            showIndex
            items={Imgs.map(
              (v) =>
                (v = {
                  original: getImageUrl(v.ImageLink, 600, 386),
                  thumbnail: getImageUrl(v.ImageLink, 600, 386),
                })
            )}
          />
        </div>
      )}
    </div>
  )
}

export default MainSlider
