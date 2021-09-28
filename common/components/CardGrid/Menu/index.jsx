import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from './styles.module.scss';

function Menu({ dir }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const ref = useOnclickOutside(() => {
    setShowMoreOptions(false);
  });

  return (
    <>
      <img
        src="/assets/icons/menu.svg"
        alt="menu"
        className={styles.menuIcon}
        onClick={e => {
          e.stopPropagation();
          setShowMoreOptions(!showMoreOptions);
        }}
      />
      {showMoreOptions ? (
        <ul
          ref={ref}
          style={{
            right: dir === 'ltr' ? '0px' : '',
            left: dir === 'rtl' ? '0px' : '',
          }}
          className={styles.container}
        >
          <li className={styles.listItem}>
            <div
              style={{
                marginRight: dir === 'ltr' ? '10px' : '0px',
                marginLeft: dir === 'rtl' ? '10px' : '0px',
              }}
              className={styles.imgContainer}
            >
              <img src="/assets/icons/clock.svg" />
            </div>
            <p>Pin to top (0/2)</p>
          </li>
          <li className={styles.listItem}>
            <div
              style={{
                marginRight: dir === 'ltr' ? '10px' : '0px',
                marginLeft: dir === 'rtl' ? '10px' : '0px',
              }}
              className={styles.imgContainer}
            >
              <img src="/assets/icons/clock.svg" />
            </div>
            <p>Share</p>
          </li>
          <li className={styles.listItem}>
            <div
              style={{
                marginRight: dir === 'ltr' ? '10px' : '0px',
                marginLeft: dir === 'rtl' ? '10px' : '0px',
              }}
              className={styles.imgContainer}
            >
              <img src="/assets/icons/clock.svg" />
            </div>
            <p>Notify</p>
          </li>
          <li className={styles.listItem}>
            <div
              style={{
                marginRight: dir === 'ltr' ? '10px' : '0px',
                marginLeft: dir === 'rtl' ? '10px' : '0px',
              }}
              className={styles.imgContainer}
            >
              <img src="/assets/icons/clock.svg" />
            </div>
            <p>Add to Watchlist</p>
          </li>
        </ul>
      ) : null}
    </>
  );
}

export default Menu;
