import React, { useState } from 'react';
import styles from './styles.module.scss';

function Favourite({ top, right, bottom, left, dir }) {
  const [iconToggle, setIconToggle] = useState(false);
  const handleClick = () => {
    setIconToggle(!iconToggle);
  };

  return (
    <>
      {iconToggle ? (
        <div
          style={{
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            direction: dir === 'ltr' ? 'ltr' : 'rtl',
          }}
          className={styles.textContainer}
        >
          <img
            onClick={handleClick}
            src="/assets/icons/fav-fill.svg"
            alt="favourite icon"
          />
          <p className={styles.iconText}>Added to watchlist</p>
        </div>
      ) : (
        <div
          style={{ top: top, right: right, bottom: bottom, left: left }}
          className={styles.iconContainer}
        >
          <img
            onClick={handleClick}
            src="/assets/icons/fav-border.svg"
            alt="favourite icon"
          />
        </div>
      )}
    </>
  );
}

export default Favourite;
