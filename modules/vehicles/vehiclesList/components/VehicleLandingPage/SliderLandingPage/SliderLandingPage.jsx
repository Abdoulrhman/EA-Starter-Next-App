/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    return (
      <div className={styles.containerAsNavFor}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          arrows={false}
        >
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    {/* <img width="100%" className={styles.icon2} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" /> */}
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    {/* <img width="100%" className={styles.icon2} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" /> */}
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    {/* <img width="100%" className={styles.icon2} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" /> */}
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    <img width="100%" className={styles.icon2} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    {/* <img width="100%" className={styles.icon2} src={imageIcon1} /> */}
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.flexAsNav}>
              <div className={styles.textSlider}>
                <h1 className={styles.textHead}>2019 Lamborghini URUS MY19</h1>
                <div className={styles.textSmall}>
                  <small className={styles.text1}>
                    {' '}
                    {/* <PermScanWifiIcon className="icon1" /> */}
                    Luxury
                  </small>
                  <small className={styles.text2}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    Low Milage
                  </small>
                </div>
                <h2 className={styles.textPrice}>
                  <span className={styles.priceColor}>AED</span>
                  450,000,999
                </h2>
                <div className={styles.textSmall2}>
                  <small className={styles.text1}>
                    {/* <AccessTimeIcon className="icon2" /> */}
                    4d : 11h : 11m
                  </small>
                  <small className={styles.text1}>
                    {/* <img width="100%" className={styles.icon2} src={imageIcon1} /> */}
                    364
                  </small>
                </div>
              </div>
              <div className={styles.imgSlider} style={{ width: '60%' }}>
                <h3 className={styles.textColor}>Lot # 586980</h3>
                <img width="100%" src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
              </div>
            </div>
          </div>
        </Slider>
        <div className={styles.slideSmall}>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={5}
            swipeToSlide
            focusOnSelect
            dots
            arrows
          >
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
            <div>
              <div className={styles.imgPostion}>
                <img className={styles.imgSalidSmall} src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png" />
                <small className={styles.textSlidSmalls}>Lot # 586980</small>
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.btn_div}>
          <a href="#" className={styles.btnAsNav}>
            View All Vehicles (87654)
          </a>
        </div>
      </div>
    )
  }
}
