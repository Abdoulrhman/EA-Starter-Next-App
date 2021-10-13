import React, { useState } from 'react'
// import { Link } from 'next/link'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'
import SectionLayout from '../SectionLayout'

function Documents(props) {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <Divider width="100%" height="1px" bgColor="#EDEDED" margin="" />
      <div className={styles.contentContainer}>
        {OptionGroups.map((o, index) => (
          <div className={styles.itemsContainer} key={index}>
            <p className={styles.optionTitle}>{o.Title}</p>
            <a href={o.Link} target="_blank">
              <button className={styles.btnView} type="button">
                View
              </button>
            </a>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Documents
