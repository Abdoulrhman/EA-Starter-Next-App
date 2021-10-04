import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

const Highlights = () => {
  const [info, setInfo] = useState({
    ViewTypeId: 1,
    Collapsed: false,
    EnableCollapse: true,
    OptionGroups: [
      {
        Id: 12,
        Title: 'Condition',
        ImageUrl: '',
        Order: 0,
        Options: [
          {
            Id: 0,
            Title: 'GCC Specifications',
          },
        ],
      },
      {
        Id: 13,
        Title: 'General',
        ImageUrl: '',
        Order: 0,
        Options: [
          {
            Id: 0,
            Title: 'GCC Specifications',
          },
        ],
      },
      {
        Id: 14,
        Title: 'Region',
        ImageUrl: '',
        Order: 0,
        Options: [
          {
            Id: 0,
            Title: 'GCC Specifications',
          },
        ],
      },
    ],
    Id: 1,
    Title: 'HIGHLIGHTS',
  })

  console.log(setInfo)

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p className={styles.headTitle}>{info.Title}</p>
        <img src="/assets/icons/arrow-up.svg" alt="arrow" />
      </div>
      <Divider width="100%" height="1px" bgColor="#EDEDED" />
      <div className={styles.contentContainer}>
        <ul className={styles.optionsContainer}>
          {info.OptionGroups.map((o, indx) => o.Options.length > 0 && (
          <div key={o.Id}>
            <h4 className={styles.optionTitle}>{o.Title}</h4>
            {o.Options.map((option) => (
              <li className={styles.optionItem} key={option.Id}>
                {option.Title}
              </li>
            ))}
            {indx < info.OptionGroups.length - 1 && <Divider width="100%" height="1px" bgColor="#EDEDED" margin="15px 0" />}
          </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Highlights
