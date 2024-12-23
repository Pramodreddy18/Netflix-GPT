import React from 'react'
import GptBar from './GptBar'
import GptSuggestions from './GptSuggestions'

const GptSearch = () => {
 
  return (
    <div className='pt-[25%] md:pt-0'>
      <GptBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptSearch
