/* eslint-disable no-tabs */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react'
import styles from './styles.module.scss'
// import imgCar from '../../public/bitmap.png'


const BiddingUI2 = () => (
  <div>
    <div className={styles.BiddingUI}>
      <div className={styles.container2}>
        <div className={styles.header}>
          <div className={styles.sideLeft}>
            <div className={styles.CurrentPrices}>
              <p>Current Price</p>
              <h6>
                {' '}
                <span>AED</span>
                {' '}
                121,000
              </h6>
            </div>
          </div>
          <div className={styles.sideRight}>
            {/* <i className="fa fa-close close"></i> */}
            <h5>Min. Increment</h5>
            <h6 className={styles.h6}>
              {' '}
              <span className={styles.aedpostion}>AED</span>
              {' '}
              100
            </h6>
          </div>
          <div className={styles.sideRight2}>
            <button type="button" className={styles.buttonFooter3}>
              {' '}
              <svg className={styles.marginAuto} xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11"><path className={styles.colorWhite} d="M-10.6,10.99l8.3,8.6a1.317,1.317,0,0,0,1.911,0,1.437,1.437,0,0,0,0-1.98L-7.738,10-.4,2.391A1.437,1.437,0,0,0-.4.41a1.318,1.318,0,0,0-1.911,0l-8.3,8.6A1.422,1.422,0,0,0-11,10,1.423,1.423,0,0,0-10.6,10.99Z" transform="translate(20 11) rotate(90)" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentBody}>
          <h2>Available Limit : AED 2,179,300 </h2>
          <p>Bidding Amount</p>
          <div>
            <div className={styles.numberSpinner}>
              <span className={styles.plus}>-</span>
              <input className={styles.inputUnmber} type="text" value="121,200" />
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.bottomNumberSpinner}>
              <div className={styles.sideLeft} />
              <div className={styles.sideRight}>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}  `} />
                </label>
                <p className={styles.text4}>
                  Auto Bid
                  <svg className={styles.iconInfo2} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <g transform="translate(0 0)">
                      <path className={styles.colorRed} d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Z" />
                      <path className={styles.colorWhite} d="M3.563,5.249q-.54.213-.862.325a2.275,2.275,0,0,1-.748.112A1.49,1.49,0,0,1,.935,5.367a1.031,1.031,0,0,1-.362-.81A2.943,2.943,0,0,1,.6,4.166c.018-.133.047-.282.087-.45l.451-1.593c.04-.153.074-.3.1-.433a1.921,1.921,0,0,0,.04-.375A.578.578,0,0,0,1.154.89.714.714,0,0,0,.672.771,1.264,1.264,0,0,0,.313.824C.192.862.087.9,0,.929L.119.438Q.562.257.967.129A2.5,2.5,0,0,1,1.731,0a1.463,1.463,0,0,1,1,.314,1.043,1.043,0,0,1,.352.815q0,.1-.024.366a2.447,2.447,0,0,1-.09.481L2.523,3.564c-.037.127-.069.273-.1.436a2.306,2.306,0,0,0-.043.371.533.533,0,0,0,.142.431.793.793,0,0,0,.49.115,1.422,1.422,0,0,0,.371-.057,2.109,2.109,0,0,0,.3-.1Z" transform="translate(4.894 5.599)" />
                      <path className={styles.colorWhite} d="M1.83,1.71A1.071,1.071,0,0,1,1.074,2,1.082,1.082,0,0,1,.316,1.71.931.931,0,0,1,0,1,.94.94,0,0,1,.316.295,1.074,1.074,0,0,1,1.074,0,1.062,1.062,0,0,1,1.83.295.938.938,0,0,1,2.144,1,.93.93,0,0,1,1.83,1.71Z" transform="translate(6.548 2.692)" />
                    </g>
                  </svg>
                </p>
                <i className={styles.text5} />
              </div>
            </div>

          </div>
          <div className={styles.contentFooter}>
            <form>
              <label className="">
                I agree to
                {' '}
                <a href="#" className={styles.terms}>
                  Terms and Conditions
                </a>
                {' '}
                & I have inspected the item
                <input type="radio" name="radio" />
                <span className={styles.checkmark} />
              </label>
              <button className={styles.buttonFooter1} type="button">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.067"
                  height="17.8"
                  viewBox="0 0 18.067 17.8"
                >
                  <g transform="translate(0 0)">
                    <path
                      className={styles.a2}
                      d="M14.2,15.433a1.645,1.645,0,0,1-1.126-.53,10.069,10.069,0,0
                ,0-.9-.878.788.788,0,0,1-.094-.089c-.645-.7-1.352-1.345-2.025-2.021-.408-.41-.8-.837-1.245-1.208-.146-.122-.261-.278-.394-.414C7.873,9.737,7.3,9.216,6.763,8.654c-.249-.262-.525-.5-.78-.761-.09-.092-.146-.07-.226.009-.214.211-.44.412-.653.625-.092.093-.151.09-.24,0C4.458,8.1,4.023,7.7,3.6,7.28,2.8,6.478,2,5.666,1.169,4.883.793,4.526.461,4.129.075,3.784c-.114-.1-.086-.169.007-.27.526-.57,1.1-1.091,1.651-1.64q.709-.712,1.425-1.42a3.2,3.2,0,0,0,.411-.4c.078-.111.143-.041.208.025.5.5,1,1,1.507,1.495q1.2,1.177,2.391,2.36c.3.3.608.611.918.91.1.09.091.151,0,.239-.175.164-.338.342-.511.509-.075.071-.1.126-.011.211.666.657,1.314,1.333,2,1.967.155.141.288.3.433.454.522.538,1.07,1.054,1.6,1.583.747.741,1.491,1.487,2.25,2.216.267.257.517.527.785.78a1.948,1.948,0,0,1,.487.688,1.191,1.191,0,0,1-.046,1.033,1.649,1.649,0,0,1-.692.743,1.734,1.734,0,0,1-.7.164"
                      transform="translate(2.341 2.367)"
                    />
                    <path
                      className={styles.a2}
                      d="M1.993,0a.948.948,0,0,1,.757.31c.444.461.914.9,1.366,1.346Q5.17,2.707,6.229,3.749a1.055,1.055,0,0,1,.035,1.574c-.361.415-.791.757-1.167,1.155-.081.087-.137.067-.212-.008-.325-.328-.653-.652-.98-.976-.548-.54-1.09-1.087-1.64-1.623C1.55,3.176.853,2.466.138,1.772c-.184-.179-.183-.183-.007-.357C.5,1.046.84.647,1.241.305A1.02,1.02,0,0,1,1.993,0"
                      transform="translate(6.817 0)"
                    />
                    <path
                      className={styles.a2}

                      d="M0,1.854a1.228,1.228,0,0,1,.355-.772C.692.73,1.045.395,1.385.05c.094-.094.147-.038.212.027.418.417.838.833,1.256,1.25C3.375,1.849,3.9,2.37,4.428,2.885c.657.638,1.292,1.3,1.96,1.928.118.112.122.181,0,.294-.346.324-.676.664-1.018.992a1.036,1.036,0,0,1-1.481-.008c-.321-.323-.664-.622-.976-.955C2.4,4.577,1.822,4.073,1.294,3.522,1.009,3.225.7,2.95.41,2.657a1.352,1.352,0,0,1-.41-.8"
                      transform="translate(0 6.839)"
                    />
                  </g>
                </svg>
								&nbsp; Bid Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default BiddingUI2
