import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.module.scss'

function Bid({ status }) {
  const container = classnames(styles.container, {
    [styles.positionStyle]: status === 'card-default',
  })

  return (
    <div className={container}>
      <img src="/assets/icons/Bid.svg" alt="bid icon" />
    </div>
  )
}

Bid.propTypes = {
  status: PropTypes.string,
}
Bid.defaultProps = {
  status: '',
}
export default Bid
