import React from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames';

function Lot({ status }) {
    const container = classnames(styles.container, {
        [styles.positionStyle]: status === "card-default"
    })
    return (
        <div className={container}>
            <p>Lot #589280</p>
        </div>
    )
}

export default Lot
