import React from 'react'
import styles from './styles.module.scss'

function CostSection(props) {
  const { Title, OptionGroups } = props.SectionData

  return (
    <div>
      <div className={styles.wrapper}>
        {/* Auction Grid */}
        <div className={styles.auctionGrid}>
          {/* Terms Section */}
          <div className={styles.auctionDetails}>
            <div className={styles.auctionDetailsHeader}>
              <h4>{Title}</h4>
            </div>
            <div className={styles.auctionDetailsBody}>
              {/* start Accordion */}
              <div className={styles.auctionAccordion}>
                {OptionGroups.map((o) =>
                  o.Id !== 26 ? (
                    <div className={styles.auctionAccordionHeader} key={o.Id}>
                      <span className={styles.costInfo}>{o.Title} :</span>
                      <span className={styles.costNumber}>AED {o.Value}</span>
                    </div>
                  ) : (
                    <div className={styles.auctionAccordionBody} key={o.Id}>
                      <div className={styles.total}>
                        <span className={styles.totalInfo}>{o.Title}</span>
                        <span className={styles.totalNumber}>
                          AED {o.Value}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
              {/* start Accordion */}
            </div>
          </div>
        </div>
        {/* Auction Grid */}
      </div>
    </div>
  )
}

export default CostSection
