import React from 'react'


const ActorItem = ({item}) => {
    const imageObject = item["image"] || ''
    const image = imageObject["medium"] || imageObject["original"] || ''
    const name = item["name"] || ''
    const countryObject = item['country'] || ""
    const country = countryObject['name'] || ""
    const url =  item['url']

    
  return (
    <>
    {image!=='' &&<li className='p-5 bg-orange m-3 rounded-md flex flex-col justify-center'>
        <a href={url} target="_blank" rel="noreferrer"><img src= {image} alt = "broken"/></a>
        <div className='flex flex-row justify-between'>
            <h1 className='text-white font-bold text-lg'>{name}</h1>
            {country!==''&&<div >
            <p >{country} </p>
            
            </div>}
        </div>
    </li>}
    </>
    
  )
}

export default ActorItem