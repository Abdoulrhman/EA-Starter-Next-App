/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import SearchFilter from '../../modules/vehicles/vehiclesList/components/SearchFilter/Search'
import styles from './styles.module.scss'

const SearchSort = () => (
  <div className={styles.SearchSort}>
    <div className={styles.DisFlex}>
      <div className={styles.textHeader}>
        <h3>
          Vehicles (50)
          <span>Auction</span>
        </h3>
      </div>
      <div className={styles.DisFlex2}>
        <SearchFilter />
        <div>
          <button type="button" className={styles.btnSort}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="19.2" viewBox="0 0 16 19.2"><path className={styles.colorgray} d="M12.934,19.2a.789.789,0,0,1-.557-.229L10.1,16.695a.8.8,0,0,1,1.131-1.131l.9.9V.8a.8.8,0,1,1,1.6,0V16.467l.9-.9a.8.8,0,0,1,1.131,1.131L13.5,18.968a.786.786,0,0,1-.558.231ZM2.264,18.4V2.732l-.9.9A.8.8,0,0,1,.23,2.5L2.5.231A.786.786,0,0,1,3.06,0l.006,0a.784.784,0,0,1,.557.229L5.9,2.5A.8.8,0,0,1,4.765,3.636l-.9-.9V18.4a.8.8,0,1,1-1.6,0Z" transform="translate(0)" /></svg>
            <span className={styles.HiddenSm}> Sort</span>
          </button>
        </div>
        <div>
          <button type="button" className={styles.btnSort2}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path className={styles.colorgray} d="M21.25,18h-2a.75.75,0,0,1,0-1.5h2a1.25,1.25,0,0,0,1.25-1.25V8.75A1.25,1.25,0,0,0,21.25,7.5H2.75A1.25,1.25,0,0,0,1.5,8.75v6.5A1.25,1.25,0,0,0,2.75,16.5h2a.75.75,0,0,1,0,1.5h-2A2.75,2.75,0,0,1,0,15.25V8.75A2.75,2.75,0,0,1,2.75,6h18.5A2.75,2.75,0,0,1,24,8.75v6.5A2.75,2.75,0,0,1,21.25,18Z" />
              <path className={styles.colorgray} d="M17.25,24H6.75A2.75,2.75,0,0,1,4,21.25v-7.5A.75.75,0,0,1,4.75,13h14.5a.75.75,0,0,1,.75.75v7.5A2.75,2.75,0,0,1,17.25,24ZM5.5,14.5v6.75A1.25,1.25,0,0,0,6.75,22.5h10.5a1.25,1.25,0,0,0,1.25-1.25V14.5Z" />
              <path className={styles.colorgray} d="M16.25,18H7.75a.75.75,0,0,1,0-1.5h8.5a.75.75,0,0,1,0,1.5Z" />
              <path className={styles.colorgray} d="M16.25,21H7.75a.75.75,0,0,1,0-1.5h8.5a.75.75,0,0,1,0,1.5Z" />
              <path className={styles.colorgray} d="M19.25,7.5a.75.75,0,0,1-.75-.75v-4A1.25,1.25,0,0,0,17.25,1.5H6.75A1.25,1.25,0,0,0,5.5,2.75v4a.75.75,0,0,1-1.5,0v-4A2.75,2.75,0,0,1,6.75,0h10.5A2.75,2.75,0,0,1,20,2.75v4A.75.75,0,0,1,19.25,7.5Z" />
            </svg>
            <span className={styles.HiddenSm}>
              Print
            </span>
          </button>
        </div>
        <div>
          <button className={styles.btnSort3} type="button">
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="19.2" viewBox="0 0 16 19.2"><path className={styles.colorgray} d="M12.934,19.2a.789.789,0,0,1-.557-.229L10.1,16.695a.8.8,0,0,1,1.131-1.131l.9.9V.8a.8.8,0,1,1,1.6,0V16.467l.9-.9a.8.8,0,0,1,1.131,1.131L13.5,18.968a.786.786,0,0,1-.558.231ZM2.264,18.4V2.732l-.9.9A.8.8,0,0,1,.23,2.5L2.5.231A.786.786,0,0,1,3.06,0l.006,0a.784.784,0,0,1,.557.229L5.9,2.5A.8.8,0,0,1,4.765,3.636l-.9-.9V18.4a.8.8,0,1,1-1.6,0Z" transform="translate(0)" /></svg>
          </button>
        </div>
        <div className={styles.btnSmallPostion}>
          <div>
            <button className={styles.btnSortStyle1} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g fill="none" fillRule="evenodd">
                  <g fill="#E51937">
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <path d="M0 0H7.529V7.529H0zM0 8.471H7.529V16H0zM8.471 0H16V7.529H8.471zM8.471 8.471H16V16H8.471z" transform="translate(-1323.000000, -201.000000) translate(0.000000, 43.000000) translate(444.000000, 106.000000) translate(0.000000, 38.000000) translate(860.000000, 0.000000) translate(19.000000, 14.000000)" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

            </button>
          </div>
          <div>
            <button className={styles.btnSortStyle2} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <defs>
                  <filter id="kr4q5gquua">
                    <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.713725 0 0 0 0 0.749020 0 0 0 0 0.776471 0 0 0 1.000000 0" />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g>
                          <g filter="url(#kr4q5gquua)" transform="translate(-1375.000000, -201.000000) translate(0.000000, 43.000000) translate(444.000000, 106.000000) translate(0.000000, 38.000000) translate(860.000000, 0.000000)">
                            <g>
                              <path fill="#D8D8D8" d="M0 0H16V2.824H0zM0 6.588H16V9.411999999999999H0zM0 13.176H16V16H0z" transform="translate(71.000000, 14.000000)" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SearchSort
