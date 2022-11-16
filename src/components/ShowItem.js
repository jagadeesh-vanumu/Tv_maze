import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const ShowItem = ({item}) => {
    const imageObject = item["image"] || ''
    const image = imageObject["medium"] || imageObject["original"] || ''
    const name = item["name"] || ''
    const ratingObject = item['rating'] || ""
    const rating = ratingObject['average'] || ""

    
  return (
    <>
    {image!=='' &&<li className='p-5 bg-green m-3 rounded-md flex flex-col justify-center'>
        <img src= {image} alt = "broken"/>
        <div className='flex flex-row justify-between'>
            <h1 className='text-white font-bold text-lg'>{name}</h1>
            {rating!==''&&<div className='flex flex-row'>
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