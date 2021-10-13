import React, { useState } from 'react'
import styles from './styles.module.scss'

function CardTags() {
  const [tags, setTags] = useState([
    {
      Image:
        'https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1',
      TextColor: '#3f3f3f',
      BGColor: '#eeeeee',
      Id: 0,
      Title: '3,878 Km',
    },
    {
      Image:
        'https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1',
      TextColor: '#3f3f3f',
      BGColor: '#eeeeee',
      Id: 0,
      Title: '3,878 Km',
    },
    {
      Image:
        'https://cdn.emiratesauction.com/static/AppsAssets/Tags/combinedShape@3x.png?v=1',
      TextColor: '#3f3f3f',
      BGColor: '#eeeeee',
      Id: 0,
      Title: '3,878 Km',
    },
  ])

  const tagImageDimensions = {
    width: '12px',
    height: '12px',
  }
  console.log(setTags)

  return (
    <div className={styles.productStatus}>
      {tags &&
        tags.map((tag, indx) => (
          <label
            key={indx}
            style={{
              backgroundColor: tag?.BGColor,
              color: tag?.TextColor,
            }}
            className={styles.labelStatus}
          >
            <img
              style={{
                width: tagImageDimensions.width,
                height: tagImageDimensions.height,
              }}
              className={styles.tagImg}
              src={tag?.Image}
            />
            <span>{tag?.Title}</span>
          </label>
        ))}
    </div>
  )
}

export default CardTags
