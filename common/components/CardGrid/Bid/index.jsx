import React from 'react';
import styles from './styles.module.scss';

function Bid({ top, right, bottom, left }) {
  return (
    <div
      style={{ top: top, right: right, bottom: bottom, left: left }}
      className={styles.container}
    >
      <img src="/assets/icons/Bid.svg" alt="bid icon" />
    </div>
  );
}

export default Bid;
