import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.module.scss'

function Favourite({ status }) {
  const [iconToggle, setIconToggle] = useState(false)
  const [delay, setDelay] = useState(true)

  const handleClick = () => {
    setIconToggle(!iconToggle)
  }

  useEffect(() => {
    const timer = () => setTimeout(() => {
      setDelay(!delay)
    }, 3000)
    iconToggle ? timer() : setDelay(true)
    return () => {
      clearTimeout(timer())
    }
  }, [iconToggle])

  const borderContainer = classnames({
    [styles.iconContainer]: status === 'card-details-default',
    [styles.iconBorderContainer]: status === 'card-default',
    [styles.postionStyle]: status === 'card-default',
  })

  const iconWtextContainer = classnames(styles.iconWtextContainer, {
    [styles.postionStyle]: status === 'card-default',
  })

  const fillContainer = classnames(styles.iconFillContainer, {
    [styles.postionStyle]: status === 'card-default',
  })

  return (
    <>
      {
                iconToggle ? delay ? (
                  <div className={iconWtextContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-fill.svg" alt="favourite icon" />
                    <p className={styles.iconText}>Added to watchlist</p>
                    <img src="/assets/icons/next.svg" alt="next icon" />
                  </div>
                ) : (
                  <div className={fillContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-fill.svg" alt="favourite icon" />
                  </div>
                ) : (
                  <div className={borderContainer}>
                    <img onClick={handleClick} src="/assets/icons/fav-border.svg" alt="favourite icon" />
                  </div>
                )
            }
    </>
  )
}

Favourite.propTypes = {
  status: PropTypes.string,
}
Favourite.defaultProps = {
  status: 'card-details-default',
}
export default Favourite
