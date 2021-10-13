import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function Accordion(props) {
  // const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData
  const [termCollapsed, setTermCollapsed] = useState(props.termCollapsed)
  return (
    <div className={styles.auctionDetailsBody}>
      <div className={styles.auctionAccordion}>
        <div className={styles.auctionAccordionHeader}>
          <h4>{props.Question}</h4>
          <img
            src="assets/icons/minus.svg"
            onClick={() => setTermCollapsed(!termCollapsed)}
          />
        </div>
        {termCollapsed && props.children}
      </div>
    </div>
  )
}

export default Accordion
