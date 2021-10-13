/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import Slider from 'react-slick'
// eslint-disable-next-line no-unused-vars
import styles from './styles.module.scss'
// eslint-disable-next-line no-unused-vars
// import { Breadcrumbs } from '@material-ui/core'
// import PermScanWifiIcon from '@material-ui/icons/PermScanWifi'
// import AccessTimeIcon from '@material-ui/icons/AccessTime'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import InterstedIn from '../../../components/AuctionDetails/Vehicle/InteretedIn';
// import 'material-icons/iconfont/material-icons.css';
// import InterstedIn from '../../../components/AuctionDetails/Vehicle/InteretedIn';
// import './style.scss'
export default class RecentlyAddedCars extends Component {
  render() {
    return (
      <>
        <div className={styles.Recently}>
          <div className={styles.flexCat}>
            <h1>
              {/* <img width="3%" className="textIcon" src={textIcon1} /> */}
              Recently Added Cars
            </h1>
            <a>View All Items</a>
          </div>
          <div />
        </div>

        <div className={styles.Recently}>
          <div className={styles.flexCat}>
            <h1>
              {/* <img width="3%" className="textIcon" src={textIcon1} /> */}
              Recently Added Cars
            </h1>
            <a>View All Items</a>
          </div>
          <div />
        </div>

        <div className={styles.Recently}>
          <div className={styles.flexCat}>
            <h1>
              {/* <img width="3%" className="textIcon" src={textIcon1} /> */}
              Recently Added Cars
            </h1>
            <a>View All Items</a>
          </div>
          <div />
        </div>
      </>
    )
  }
}
