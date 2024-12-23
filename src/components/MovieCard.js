import React from 'react'

const MovieCard = ({posterpath}) => {
  if(!posterpath)return null
  return (
    <div className='w-24 md:w-36 pr-4'>
      <img alt='moviename' src={'https://image.tmdb.org/t/p/w500/'+posterpath}/>
    </div>
  )
}

export default MovieCard
