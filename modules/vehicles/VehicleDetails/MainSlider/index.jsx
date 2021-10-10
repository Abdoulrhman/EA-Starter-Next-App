import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import useMediaQuery from '@mui/material/useMediaQuery'
import MagicSliderDots from 'react-magic-slider-dots'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImageGallery from 'react-image-gallery'
import 'react-magic-slider-dots/dist/magic-dots.css'
import styles from './styles.module.scss'
// import RightArrow from '/assets/icons/arrow-right.svg'
// import LeftArrow from '/assets/icons/arrow-left.svg'

function MainSlider() {
  const [mainImage, setMainImage] = useState(0)
  const [open, setOpen] = useState(false)
  const screen = useRef(null)
  const slider1 = useRef()
  const slider2 = useRef()
  const RightArrow = '/assets/icons/arrow-right.svg'
  const LeftArrow = '/assets/icons/arrow-left.svg'
  const matches = useMediaQuery('(min-width:500px)')
  const SlickArrowFix = ({ children, ...props }) => (
    <img src={children.type} {...props} />
  )
  const [Imgs, setImgs] = useState([
    { imgLink: 'https://cdn.emiratesauction.com/media/uoyf40qsihlzlnqaeq8a62mwgl82ukm9jbh7gv4cnyw8hbpyf/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/z05y3pnhar2e4y2fu82b0xfiqan2rwzgah10xgby0vuvimw6e/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/58z35p6lsc83f7rjyk6mzmy7j5kwtgy0fmfwoiugjuzk7q6dv/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1clnmykifsnufxepc9nmz67oz0x007kej5uiijnu4kysp63mxs/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1sm2c3zyqitjdaxpjuhyuduldu4of69rn31fnel63iix3xd4ut/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/uoyf40qsihlzlnqaeq8a62mwgl82ukm9jbh7gv4cnyw8hbpyf/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/z05y3pnhar2e4y2fu82b0xfiqan2rwzgah10xgby0vuvimw6e/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/58z35p6lsc83f7rjyk6mzmy7j5kwtgy0fmfwoiugjuzk7q6dv/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1clnmykifsnufxepc9nmz67oz0x007kej5uiijnu4kysp63mxs/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1sm2c3zyqitjdaxpjuhyuduldu4of69rn31fnel63iix3xd4ut/images.jpg' },
  ])

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
            <MagicSliderDots
              dots={dots}
              numDotsToShow={5}
              dotWidth={30}
              dotContainerClassName={`magic-dots slick-dots ${styles.dotContainer}`}
            />
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
              alt="vehicle image"
              src={img.imgLink}
              className={styles.mainImage}
            />
            <div
              className={styles.overlay}
            />

          </div>
        ))}
      </Slider>
      {matches && (
      <Slider
        {...settings2}
        className={styles.bottomSlider}
      >
        {Imgs.map((img, i) => (
          <img
            key={img}
            onClick={() => {
              setMainImage(i)
              slider1.current.slickGoTo(i)
            }}
            alt="vehicle thumbnail"
            src={img.imgLink}
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
            (v) => (v = {
              original: v.imgLink,
              thumbnail: v.imgLink,
            }),
          )}
        />
      </div>
      )}
    </div>
  )
}

export default MainSlider
