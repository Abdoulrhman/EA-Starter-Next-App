import React, { useState } from 'react'
import Accordion from '../Accordion'
import SectionLayout from '../SectionLayout'
import styles from './styles.module.scss'

function AskedSection(props) {
  const { Title, OptionGroups, EnableCollapse, Collapsed, termdata } = props

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.auctionGrid}>
        <div className={styles.auctionDetails}>
          {termdata.Data.slice(0, 3).map((o, indx) => (
            <Accordion termCollapsed={false} Question={o.Question} key={indx}>
              <div className={styles.auctionDetailsBody} key={o.Id}>
                <div className={styles.auctionAccordion}>
                  <div className={styles.auctionAccordionBody}>
                    <p>{o.Answer}</p>
                  </div>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}

export default AskedSection
