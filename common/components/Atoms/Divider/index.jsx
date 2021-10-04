import React from 'react'
import PropTypes from 'prop-types'

function Divider({
  width, height, bgColor, margin,
}) {
  return (
    <div style={{
      width, height, backgroundColor: bgColor, margin,
    }}
    />
  )
}

Divider.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
}


export default Divider
