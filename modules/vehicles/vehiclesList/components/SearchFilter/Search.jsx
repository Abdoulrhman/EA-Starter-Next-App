import React from 'react';

import styles from './styles.module.scss';

const Search = () => (
  <div className={styles.main}>
    <div className={styles.hasSearch}>
      <img
        className={styles.formControlFeedback}
        src="http://www.newdesignfile.com/postpic/2014/02/white-search-icon_249457.png"
      />
      <span className={styles.border} />
      <input
        type="text"
        className={styles.formControl}
        placeholder="Search..."
      />
    </div>
  </div>
);

export default Search;
