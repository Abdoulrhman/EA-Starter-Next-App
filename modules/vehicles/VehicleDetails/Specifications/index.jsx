import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'
import SectionLayout from '../SectionLayout'
function Specifications(props) {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.contentContainer}>
        <ul className={styles.itemsContainer}>
          {OptionGroups.map(o => (
            <li className={styles.item} key={o.Id}>
              <img src={o.ImageUrl} alt="icon" />
              <p className={styles.itemTitle}>{o.Title}</p>
              <p className={styles.itemSubTitle}>{o.Value}</p>
            </li>
          ))}
        </ul>
        <Divider width="100%" height="1px" bgColor="#EDEDED" margin="15px 0" />
        <ul className={styles.footer}>
          <li className={styles.footerItem}>
            <p className={styles.footerTitle}>Vin number</p>
            <p className={styles.footerValue}>WP0ZZZ99ZHS162313</p>
          </li>
        </ul>
      </div>
    </SectionLayout>
    // {/* </div> */}
  )
}

export default Specifications
