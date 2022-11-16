import React from 'react'


const ActorItem = ({item}) => {
    const imageObject = item["image"] || ''
    const image = imageObject["medium"] || imageObject["original"] || ''
    const name = item["name"] || ''
    const countryObject = item['country'] || ""
    const country = countryObject['name'] || ""

    
  return (
    <>
    {image!=='' &&<li className='p-5 bg-green m-3 rounded-md flex flex-col justify-center'>
        <img src= {image} alt = "broken"/>
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