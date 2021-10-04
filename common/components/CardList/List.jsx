import React from 'react'
import styles from './styles.module.scss'

const Header = () => (
  <div>
    {/* Start Wrapper */}
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.list_img}>
          <div className={styles.image_Wrapper}>
            <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg" />
            <div className={styles.cartBadge}>Lot # 589280</div>
            <div className={styles.heartWrapper}>
              <div className={styles.heartStatus}>
                <label className={styles.heartStatusText}>
                  <img
                    className={styles.heartIcon}
                    src="/assets/icons/heart.svg"
                  />
                  <span>Added to watchlist</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list_details}>
          <div className={styles.list_title}>
            <h3>2021 Porsche Cayen</h3>
            <div>
              <ul className={`${styles.cartSocial} ${styles.hiddenTablet}`}>
                <li className={styles.cartSocialList}>
                  <img src="/assets/icons/hammer.svg" />
                </li>
                <li
                  className={`${styles.cartSocailList} ${styles.backgroundPinned}`}
                >
                  <img src="/assets/icons/pinnedNew.svg" />
                </li>
                <li
                  className={`${styles.cartSocailList} ${styles.backgroundGray}`}
                >
                  <img src="/assets/icons/shareNew.svg" />
                </li>
                <li
                  className={`${styles.cartSocailList} ${styles.backgroundGray}`}
                >
                  <img src="assets/icons/notification.svg" />
                </li>

              </ul>
              <ul className={`${styles.cartSocial} ${styles.showTablet}`}>
                <li className={styles.cartSocailList}>
                  <img src="/assets/icons/dots.svg" />
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.productStatus}>
            <label className={styles.labelStatus}>
              <span>Luxury</span>
            </label>

          </div>

          <div className={styles.stats}>
            <ul className={styles.statsList}>
              <li>
                <img src="assets/icons/bidGray.svg" />
                <span>364</span>
              </li>
              <li>
                <img src="assets/icons/clock.svg" />
                <span>364</span>
              </li>
              <li>
                <img src="assets/icons/speed.svg"/>
                <span>364</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.list_btn}>
          <span className={styles.price_amount}>
            <sup className={styles.uppercase_text}>AED</sup>
            <label className={styles.amount_label}>121,000</label>
          </span>
          <div className={styles.priceStyle}>
            <span>Min Increment :</span>
            <label> AED</label>
            <sub>
              <span className={styles.secondSpan}>100</span>
            </sub>
          </div>
          <button type="button" className={styles.bidBtn}>
            <img
              className={styles.bidImg}
              src="/assets/icons/hammerWhite.svg"

            />
            <span> Bid Now</span>
          </button>
        </div>
      </div>
    </div>
    {/* End Wrapper */}
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.list_img}>
          <div className={styles.image_Wrapper}>
            <img
              className={styles.blurImg}
              src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg"
            />
            <div className={styles.cartBadge}>Lot # 589280</div>
          </div>
        </div>
        <div className={styles.list_details}>
          <div>
            <h4>Auction Ended!</h4>
            <p>This listing has ended and will disappear</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
