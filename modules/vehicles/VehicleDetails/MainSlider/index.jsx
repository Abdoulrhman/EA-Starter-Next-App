import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImageGallery from 'react-image-gallery'
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
  const SlickArrowFix = ({
    currentSlide, slideCount, children, ...props
  }) => (
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

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

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
    swipe: false,
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // asNavFor: nav2,
    easing: 'ease-out',
    ref: (slider) => (slider1.current = slider),
  }

  const settings2 = {
    // asNavFor: nav1,
    // rtl: localStorage.getItem('lang') == 'ar',
    slidesToShow: 5,
    swipeToSlide: false,
    focusOnSelect: true,
    // arrows: true,
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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  }

  return (
    <div style={{ width: '600px', margin: '30px' }}>
      <Slider {...settings1}>
        {Imgs.map((img, i) => (
          <div
            key={img}
            onClick={(e) => {
              e.preventDefault()
              handleOpen(i)
            }}
          >
            <div style={{ position: 'relative', borderRadius: '4px' }}>
              <img
                alt="Vehicle"
                src={img.imgLink}
                className={styles.imgSliders}
              />
              <div
                className={styles.overlay}
              />
            </div>
          </div>
        ))}
      </Slider>
      <Slider
        {...settings2}
        className={styles.bottomSlider}
        style={{ borderRadius: '0px 4px' }}
      >
        {Imgs.map((img, i) => (
          <div className={styles.imgDivSmall} key={img}>
            <img
              onClick={() => {
                setMainImage(i)
                slider1.current.slickGoTo(i)
              }}
              alt="Vehicle Thumbnail"
              src={img.imgLink}
              className={styles.smallImgSliders}
            />
          </div>
        ))}
      </Slider>
      {open && (
      <div className={styles.imagesContainer}>
        <ImageGallery
          onScreenChange={(e) => setOpen(e)}
          ref={screen}
          showPlayButton={false}
          startIndex={mainImage}
          isRTL={false}
          slideOnThumbnailOver
          showIndex
          originalClass={styles.ImageGalleryMain}
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
