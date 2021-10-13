import React from 'react'
import styles from './styles.module.scss'
import SectionLayout from '../SectionLayout'

function ValueService(props) {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.contentContainer}>
        <ul className={styles.itemsContainer}>
          {OptionGroups.map((o) => (
            <li className={styles.item} key={o.Id}>
              <div
                className={styles.itemTitle}
                dangerouslySetInnerHTML={{
                  __html: o.Title,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  )
}

export default ValueService
