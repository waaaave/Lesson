import React from 'react';

const ProductItem = (props) => {
  const {name} = props.product
  return(
    <>
      {name}
    </>
  )
}

export default ProductItem