/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import SectionLayout from '../SectionLayout'
import styles from './styles.module.scss'

const DELIVERY = (props) => {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.Delivery}>
        <div className={styles.ServiceBody}>
          <div>
            <div className={styles.loctionFlex}>
              <div>
                <p>
                  Once you win the bid, you will have the option to get the item
                  delivered to you for an additional cost.
                </p>
                <span>Working Hours</span>
                <h5>From 9:00am to 6:00pm</h5>
              </div>
              <div>
                <p className={styles.textColor}>"open"</p>
              </div>
            </div>

            <div className={styles.flexDelivery}>
              <div>
                <h6 className={styles.headingDelivery}>Estimated Total :</h6>
              </div>
              <div>
                <h6>
                  <span className={styles.span1Delivery}>AED</span>
                  <span className={styles.span2Delivery}>450</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
export default DELIVERY
