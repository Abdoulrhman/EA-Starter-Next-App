import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.module.scss'

function Lot({ status }) {
  const container = classnames(styles.container, {
    [styles.positionStyle]: status === 'card-default',
  })
  return (
    <div className={container}>
      <p>Lot #589280</p>
    </div>
  )
}

Lot.propTypes = {
  status: PropTypes.string,
}
Lot.defaultProps = {
  status: '',
}
export default Lot
