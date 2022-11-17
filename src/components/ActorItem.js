import React from 'react'


const ActorItem = ({item}) => {
    
    const image = item?.image?.medium || item?.image?.original || ''
    const name = item?.name || ''
    const country = item?.country?.name || ""
    const url =  item?.url || ''

    
  return (
    <>
    {image!=='' &&<li className='p-5 bg-orange m-3 rounded-md flex flex-col justify-center'>
        <a href={url} target="_blank" rel="noreferrer"><img src= {image} alt = "broken" className='w-full'/></a>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-white font-bold text-md'>{name}</h1>
            {country!==''&&<div >
            {country} 
            </div>}
        </div>
    </li>}
    </>
    
  )
}

export default ActorItem