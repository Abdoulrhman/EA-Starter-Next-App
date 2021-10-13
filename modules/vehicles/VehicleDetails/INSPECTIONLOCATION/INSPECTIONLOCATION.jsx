/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SectionLayout from '../SectionLayout'
import styles from './styles.module.scss'

const INSPECTIONLOCATION = (props) => {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.Inspectionlocation}>
        <div className={styles.ServiceBody}>
          <div className={styles.imageLocation}>
            <img
              width="100%"
              height="195px"
              src="https://fiorecommunications.com/wp-content/uploads/2019/02/image-maps.jpg"
              alt=" "
            />
            <div className={styles.imageabs}>
              <p className={styles.pLoction}>Parking # 12345 </p>
              <img src="https://icons555.com/images/icons-red/image_icon_map_marker_pic_512x512.png" />
            </div>
          </div>
          <div>
            <div className={styles.loctionFlex}>
              <div>
                <span>Vehicle Location</span>
                <h5>Ballroom 1, Hilton Hotel, The Walk JBR, Dubai</h5>
              </div>
              <div>
                <p className={styles.textColor} />
              </div>
            </div>
            <div className={styles.loctionFlex}>
              <div>
                <span>Working Hours</span>
                <h5>From 9:00am to 6:00pm</h5>
              </div>
              <div>
                <p className={styles.textColor}>"open"</p>
              </div>
            </div>
            <div className={styles.loctionFlex}>
              <div>
                <span>For more information</span>
                <h5>Contact Mr Ahmed</h5>
              </div>
              <div>
                <p className={styles.textColor} />
              </div>
            </div>
            <div className={styles.transDispaly}>
              <button type="button" className={styles.btnCopy}>
                <div className={styles.iconCopy}> Call now </div>
              </button>
              <button type="button" className={styles.btnCopy}>
                <div className={styles.iconCopy}> WhatApp </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default INSPECTIONLOCATION
