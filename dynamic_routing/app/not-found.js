import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-black'>
          <Image src={"/notfound.svg"} alt='Not-Found-Image' height={400} width={400} />
    
      <Link href={"/"} className='px-3 py-3 bg-indigo-500 rounded-lg mt-5 cursor-pointer hover:scale-105 hover:bg-indigo-600 fond-bold'>
        Back to home
      </Link>
    </div>
  )
}

export default NotFound