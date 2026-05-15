import React from 'react'

const Products = async ({params}) => {
  const { id } = await params;
  return (
    <div>Products {id}</div>
  )
}

export default Products