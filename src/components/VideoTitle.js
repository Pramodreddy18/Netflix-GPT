import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" pt-28 md:pt-32 px-4 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
     <h1 className='font-bold text-2xl md:text-6xl'>{title}</h1>
     <p className=' hidden md:inline-block w-1/3'>{overview}</p>
     <div className=''>
        <button className='bg-white p-2 md:p-4 md:px-10 md:text-lg text-black rounded-md hover:bg-opacity-80'> ⏵ Play</button>
        <button className='bg-gray-200 p-2 md:p-4 md:px-6 m-2 md:text-lg text-white bg-opacity-50 rounded-md hover:bg-opacity-30' > ⓘMore info</button>
     </div>
    </div>
  )
}

export default VideoTitle
