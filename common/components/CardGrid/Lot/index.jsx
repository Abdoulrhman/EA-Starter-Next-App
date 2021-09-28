import React from 'react';
import styles from './styles.module.scss';

function Lot({ top, right, bottom, left, dir }) {
  return (
    <div
      style={{
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        borderRadius: dir === 'ltr' ? '0px 2px 2px 0px' : '2px 0px 0px 2px',
      }}
      className={styles.container}
    >
      <p>Lot #589280</p>
    </div>
  );
}

export default Lot;
