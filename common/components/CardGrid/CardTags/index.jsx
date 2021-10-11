import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

function CardTags({ dir, Tags }) {
  const tagImageDimensions = {
    width: '15px',
    height: '15px',
  }

  return (
    <div style={{ direction: dir }} className={styles.productStatus}>
      {Tags
        && Tags.map((tag, indx) => (
          <label
            key={indx}
            style={{
              backgroundColor: tag?.BGColor,
              color: tag?.TextColor,
            }}
            // className={`${
            // 	locale == 'en' ? styles.labelStatus : styles.labelStatusAr
            // }`}
            className={
              dir === 'ltr' ? styles.labelStatus : styles.labelStatusAr
            }
          >
            <img
              style={{
                width: tagImageDimensions.width,
                height: tagImageDimensions.height,
              }}
              // className={locale == 'en' ? styles.tagImg : styles.tagImgAr}
              className={dir === 'ltr' ? styles.tagImg : styles.tagImgAr}
              src={tag?.Image}
            />
            <span>{tag?.Title}</span>
          </label>
        ))}
    </div>
  )
}

export default CardTags
