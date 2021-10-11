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
// import './styles.css';
const GROUP1 = [
  [
    'https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
]


const Gallery = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>Gallery</h1>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14.13" height="8.916" viewBox="0 0 14.13 8.916"><path className={styles.a} d="M8.711,8.685a.651.651,0,0,1-1,0L1.3,1.07A.651.651,0,0,1,1.8,0H14.625a.651.651,0,0,1,.5,1.07Z" transform="translate(15.278 8.916) rotate(180)" /></svg>
      </div>
    </div>
    <div className={styles.ServiceBody}>
      <div className="content">
        <div>
          <LightgalleryProvider>
            <div className={styles.padding_grid}
              style={{
								  display: 'flex',
								  alignItems: 'center',
								  justifyContent: 'space-between',
								  padding: '1.5rem',
								  position: 'relative',
								  flexWrap: 'wrap',
              }}
            >
              {GROUP1.map((p, idx) => (
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
                    src={p[0]}
                    thumb={p[1]}
                  >
                    <div className={styles.overlayImg}>
                      <h5 className={styles.textOverlay}>Interior</h5>
                      <h5 className={styles.textOverlay}>(34)</h5>
                    </div>
                    <img src={p[0]} alt="" style={{ width: '100%' }} />
                  </LightgalleryItem>
                </div>
              ))}
            </div>
          </LightgalleryProvider>
        </div>
      </div>

    </div>
  </div>
)

export default Gallery
