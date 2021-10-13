import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import ProvidedBy from '../ProvidedBy'
import SectionLayout from '../SectionLayout'
import styles from './styles.module.scss'

const TermsAndConditions = (props) => {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  const [terms, setTerms] = useState({
    ViewTypeId: 7,
    Collapsed: false,
    EnableCollapse: true,
    OptionGroups: [{ Title: 'Test', Value: 'Test Test Test' }],
    Id: 11,
    Title: 'الشروط والأحكام',
  })
  return (
    <>
      <SectionLayout
        Collapsed={Collapsed}
        EnableCollapse={EnableCollapse}
        Title={Title}
      >
        <Divider width="100%" height="1px" bgColor="#EDEDED" margin="" />
        <div className={styles.contentContainer}>
          <ul className={styles.optionsContainer}>
            {terms.OptionGroups.map((o, indx) => (
              <li className={styles.optionItem} key={indx}>
                {o.Title}
              </li>
            ))}
          </ul>
        </div>
      </SectionLayout>
    </>
  )
}

export default TermsAndConditions
