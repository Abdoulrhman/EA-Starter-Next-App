import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import styles from './styles.module.scss'

function MainSlider() {
  const [Imgs, setImgs] = useState([
    { imgLink: 'https://cdn.emiratesauction.com/media/uoyf40qsihlzlnqaeq8a62mwgl82ukm9jbh7gv4cnyw8hbpyf/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/z05y3pnhar2e4y2fu82b0xfiqan2rwzgah10xgby0vuvimw6e/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/58z35p6lsc83f7rjyk6mzmy7j5kwtgy0fmfwoiugjuzk7q6dv/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1clnmykifsnufxepc9nmz67oz0x007kej5uiijnu4kysp63mxs/images.jpg' },
    { imgLink: 'https://cdn.emiratesauction.com/media/1sm2c3zyqitjdaxpjuhyuduldu4of69rn31fnel63iix3xd4ut/images.jpg' },
  ])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
