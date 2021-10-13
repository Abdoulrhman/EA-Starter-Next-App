import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function SectionLayout(props) {
  // const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData
  const [collapsed, setCollapsed] = useState(props.Collapsed)
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p className={styles.headTitle}>{props.Title}</p>
        {props.EnableCollapse && !collapsed ? (
          <img
            src="/assets/icons/arrow-up.svg"
            alt="arrow"
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <img
            src="/assets/icons/arrow-right.svg"
            alt="arrow"
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </div>
      <Divider width="100%" height="1px" bgColor="#EDEDED" margin="" />
      {!collapsed && props.children}
      {/* {!collapsed && <div className={styles.contentContainer}>
        <ul className={styles.itemsContainer}>
          {OptionGroups.map(
            (o) => (
              <li className={styles.item} key={o.Id}>
                <img src={o.ImageUrl} alt='icon' />
                <p className={styles.itemTitle}>{o.Title}</p>
                <p className={styles.itemSubTitle}>{o.Value}</p>
              </li>
            ),
          )}
        </ul>
        <Divider width='100%' height='1px' bgColor='#EDEDED' margin='15px 0' />
        <ul className={styles.footer}>
          <li className={styles.footerItem}>
            <p className={styles.footerTitle}>Vin number</p>
            <p className={styles.footerValue}>WP0ZZZ99ZHS162313</p>
          </li>
        </ul>
      </div>} */}
    </div>
  )
}

export default SectionLayout
