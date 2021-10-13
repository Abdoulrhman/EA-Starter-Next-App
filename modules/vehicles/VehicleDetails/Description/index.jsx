import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'
import SectionLayout from '../SectionLayout'

function Description(props) {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <Divider width="100%" height="1px" bgColor="#EDEDED" margin="" />
      <div className={styles.contentContainer}>
        <ul className={styles.optionsContainer}>
          {OptionGroups.map(
            (o, indx) =>
              o.Options.length > 0 && (
                <div key={o.Id}>
                  <div className={styles.optionHead}>
                    <img
                      style={{ width: '18px' }}
                      src={o.ImageUrl}
                      alt="icon"
                    />
                    <h4 className={styles.optionTitle}>{o.Title}</h4>
                  </div>
                  {o.Options.map(option => (
                    <li className={styles.optionItem} key={option.Id}>
                      {option.Title}
                    </li>
                  ))}
                  {indx < OptionGroups.length - 1 && (
                    <Divider
                      width="100%"
                      height="1px"
                      bgColor="#EDEDED"
                      margin="15px 0"
                    />
                  )}
                </div>
              )
          )}
        </ul>
      </div>
    </SectionLayout>
  )
}

export default Description
