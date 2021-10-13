import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import ProvidedBy from '../ProvidedBy'
import SectionLayout from '../SectionLayout'
import styles from './styles.module.scss'

const Highlights = props => {
  const { ProviderName } = props
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <>
      {ProviderName && <ProvidedBy ProviderName={ProviderName} />}
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
                    <h4 className={styles.optionTitle}>{o.Title}</h4>
                    {o.Options.map((option, index) => (
                      <li className={styles.optionItem} key={index}>
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
    </>
  )
}

export default Highlights
