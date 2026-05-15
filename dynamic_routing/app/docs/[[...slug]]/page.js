import React from 'react'

const Page = async ({ params }) => {
    const { slug } = await params;
  return (
    <div> hello {slug?.join('/')}</div>
  )
}

export default Page