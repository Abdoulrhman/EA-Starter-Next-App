import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function SectionLayout(props) {
  const { Collapsed, Title, EnableCollapse } = props
  const [collapsed, setCollapsed] = useState(Collapsed)
  return (
    <div className={styles.container}>
      <div className={styles.head} onClick={() => setCollapsed(!collapsed)}>
        <p className={styles.headTitle}>{Title}</p>
        {EnableCollapse && !collapsed ? (
          <img src="/assets/icons/arrow-up.svg" alt="arrow" />
        ) : (
          <img src="/assets/icons/arrow-right.svg" alt="arrow" />
        )}
      </div>
      <Divider width="100%" height="1px" bgColor="#EDEDED" margin="" />
      {!collapsed && props.children}
    </div>
  )
}

export default SectionLayout
