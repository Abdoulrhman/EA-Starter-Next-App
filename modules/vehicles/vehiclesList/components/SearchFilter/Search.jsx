import React from 'react';

import styles from './styles.module.scss';

const  Search  =()=> {
    return (
        <div className={styles.main}>
        <div className={styles.hasSearch}>
            <img className={styles.formControlFeedback} src={'http://www.newdesignfile.com/postpic/2014/02/white-search-icon_249457.png'} />
            <span className={styles.border}></span>
            <input type="text" className={styles.formControl} placeholder="Search..." />
        </div>
        </div>
    )
}

export default Search
