/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import styles from './styles.module.scss'
import 'lightgallery.js/dist/css/lightgallery.css'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import SectionLayout from '../SectionLayout'
import { getImageUrl } from '../../../../utils/ImageFormat/imageFormat'
// import './styles.css';

const Gallery = (props) => {
  const { Title, OptionGroups, EnableCollapse, Collapsed } = props.SectionData

  return (
    <SectionLayout
      Collapsed={Collapsed}
      EnableCollapse={EnableCollapse}
      Title={Title}
    >
      <div className={styles.Gallery}>
        <div className={styles.ServiceBody}>
          <div className="content">
            <div>
              <LightgalleryProvider>
                <div
                  className={styles.padding_grid}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    position: 'relative',
                    flexWrap: 'wrap',
                  }}
                >
                  {OptionGroups.map((opj) =>
                    opj.Images.map((p, idx) => (
                      <div
                        md={4}
                        key={idx}
                        style={{
                          width: '100%',
                          padding: '0px',
                          marginRight: '0.7rem',
                          marginLeft: '0.7rem',
                          marginBottom: '1.5rem',
                          flex: '1 0 29%',
                          position: 'relative',
                        }}
                      >
                        <LightgalleryItem
                          className={styles.lightgallery}
                          src={getImageUrl(p.ImageLink, 600, 386)}
                          thumb={getImageUrl(p.ImageLink, 600, 386)}
                          group={opj.Title}
                        >
                          <div className={styles.overlayImg}>
                            <h5 className={styles.textOverlay}>{opj.Title}</h5>
                            <h5 className={styles.textOverlay}>
                              ({opj.Images.length})
                            </h5>
                          </div>
                          <img
                            src={getImageUrl(p.ImageLink, 600, 386)}
                            alt=""
                            style={{ width: '100%' }}
                          />
                        </LightgalleryItem>
                      </div>
                    ))
                  )}
                </div>
              </LightgalleryProvider>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
export default Gallery
