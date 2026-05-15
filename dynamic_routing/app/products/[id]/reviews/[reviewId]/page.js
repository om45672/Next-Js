import React from 'react'

const Page = async ({ params}) => {
    const {id , reviewId } = await params;
  return (
    <div>Page {id} {reviewId}</div>
  )
}

export default Page