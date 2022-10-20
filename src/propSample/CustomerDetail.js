import React from 'react';
import PropTypes from 'prop-types'

function CustomerDetail(props) {
  return (
    <>
      <h1>{props.companyName}</h1>
      <h1>{props.contactName}</h1>
      <h1>{props.contactTitle}</h1>    
    </>
  )
}

CustomerDetail.propTypes = {
  companyName: PropTypes.string,
  contactName: PropTypes.string,
  contactTitle: PropTypes.string
}

export default CustomerDetail