import React,{useState} from 'react';
import useOnclickOutside from "react-cool-onclickoutside";
import styles from './styles.module.scss';


function Menu() {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

    const ref = useOnclickOutside(() => {
        setShowMoreOptions(false);
      });
    
    return (
        <>
            <img src="/assets/icons/menu.svg" alt="menu" 
                className={styles.menuIcon}
                onClick={(e) => {
                        e.stopPropagation();
                        setShowMoreOptions(!showMoreOptions);
                }}/>
            {showMoreOptions ? 
                <ul ref={ref} className={styles.container}>
                    <li className={styles.listItem}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/icons/pinnedNew.svg" />
                        </div>
                        <p>Pin to top (0/2)</p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/icons/shareNew.svg" />
                        </div>
                        <p>Share</p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/icons/Notification-white.svg" />
                        </div>
                        <p>Notify</p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/icons/fav-border-white.svg" />
                        </div>
                        <p>Add to Watchlist</p>
                    </li>
                </ul> : null}        
            
        </>
    )
}

export default Menu
