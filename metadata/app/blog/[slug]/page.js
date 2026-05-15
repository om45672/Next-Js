import React from 'react'

export async function generateMetadata({params}) {
    const { slug } = await params;
    return {
        title: `Blog ${slug}`,
        description: "This is a blog",
    }
}   

const Blog = async ({ params }) => {
    const { slug } = await params;
  return (
    <div>{slug}</div>
  )
}

export default Blog