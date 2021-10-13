/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
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
    'https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
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


const GalleryHome = () => (
  <div className={styles.Gallery}>
    <div className={styles.ServiceHeader}>
      <h1>Gallery</h1>
      <p>Take a look at our journey!</p>
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
                <div className={styles.widthGrid}
                  md={4}
                  key={idx}
                  style={{
                    width: '100%',
                    padding: '0px',
                    marginRight: '0.7rem',
                    marginLeft: '0.7rem',
                    marginBottom: '1.5rem',
                    position: 'relative',
                  }}
                >
                  <LightgalleryItem
                    className={styles.lightgallery}
                    src={p[0]}
                    thumb={p[1]}
                  >
                    <img src={p[0]} alt="" style={{ width: '100%' }} />
                  </LightgalleryItem>
                </div>
              ))}
            </div>
          </LightgalleryProvider>
        </div>
      </div>

    </div>
    <button className={styles.btnGallery}>Discover More</button>
  </div>
)

export default GalleryHome
