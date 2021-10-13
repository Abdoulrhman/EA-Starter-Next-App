import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function Accordion(props) {
  const { Question, termCollapsed } = props
  const [termCollapse, setTermCollapsed] = useState(termCollapsed)
  return (
    <div className={styles.auctionDetailsBody}>
      <div className={styles.auctionAccordion}>
        <div className={styles.auctionAccordionHeader}>
          <h4>{Question}</h4>
          <img
            src="assets/icons/minus.svg"
            onClick={() => setTermCollapsed(!termCollapse)}
          />
        </div>
        {termCollapse && props.children}
      </div>
    </div>
  )
}

export default Accordion