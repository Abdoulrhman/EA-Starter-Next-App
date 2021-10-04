import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function Description() {
  const [description, setDescription] = useState({
    ViewTypeId: 1,
    Collapsed: false,
    EnableCollapse: true,
    OptionGroups: [
      {
        Id: 10,
        Title: 'Interior',
        ImageUrl: 'https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/desc-interior@3x.png?v=1',
        Order: 0,
        Options: [
          {
            Id: 0,
            Title: 'To be Sold As Is Where Is',
          },
        ],
      },
      {
        Id: 11,
        Title: 'Exterior',
        ImageUrl: 'https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/desc-extrior-awesome-car@3x.png?v=1',
        Order: 0,
        Options: [
          {
            Id: 0,
            Title: 'To be Sold As Is Where Is',
          },
        ],
      },
    ],
    Id: 3,
    Title: 'VEHICLE DESCRIPTION',
  })

  console.log(setDescription)

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p className={styles.headTitle}>{description.Title}</p>
        <img src="/assets/icons/arrow-up.svg" alt="arrow" />
      </div>
      <Divider width="100%" height="1px" bgColor="#EDEDED" />
      <div className={styles.contentContainer}>
        <ul className={styles.optionsContainer}>
          {description.OptionGroups.map(
            (o, indx) => o.Options.length > 0 && (
              <div key={o.Id}>
                <div className={styles.optionHead}>
                  <img style={{ width: '18px' }} src={o.ImageUrl} alt="icon" />
                  <h4 className={styles.optionTitle}>{o.Title}</h4>
                </div>
                {o.Options.map((option) => (
                  <li className={styles.optionItem} key={option.Id}>
                    {option.Title}
                  </li>
                ))}
                {indx < description.OptionGroups.length - 1 && <Divider width="100%" height="1px" bgColor="#EDEDED" margin="15px 0" />}
              </div>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}

export default Description
