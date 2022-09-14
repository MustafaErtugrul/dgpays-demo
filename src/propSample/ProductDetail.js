import React from 'react';
import PropTypes from 'prop-types'

function ProductDetail(props) {


  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <h1>{props.country}</h1>
    </>
  )
}

ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  country: PropTypes.string
}

ProductDetail.defaultProps = {
  country: 'Türkiye'
}

//proplara default değer verebilirim.
//proplara tip "zorunlu" hale getirebilirim. 


export default ProductDetail