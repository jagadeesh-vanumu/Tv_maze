import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const ShowItem = ({item}) => {
    const image = item?.image?.medium || item?.image?.original || ''
    const name = item?.name || ''
    const rating = item?.rating?.average || ""
    const url = item?.url || ''

    
  return (
    <>
    {image!=='' &&<li className='p-3 bg-green m-3 rounded-md flex flex-col justify-center items-center max-w-screen'>
    <a href={url} target="_blank" rel="noreferrer" className='w-full'><img src= {image} alt = "broken" className='w-full'/></a>
        <div className='flex flex-row justify-between w-full'>
            <h1 className='text-white font-bold text-md'>{name}</h1>
            {rating!==''&&<div className='flex flex-row justify-between'>
            <p className='mr-2'>Rating </p>
            <span>{rating}</span>
            <StarIcon style={{fill:'gold'}}/>
            </div>}
        </div>
    </li>}
    </>
    
  )
}

export default ShowItem