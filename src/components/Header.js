import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row justify-between px-20 bg-black'>
        <img src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1__4x.png" alt = "netflix-logo" className='w-52 h-32 bg-black'/>
        <nav >
            <ul className='flex flex-row justify-center items-center h-full text-white font-bold'>
             <li className='mx-3'>Home</li>
             <li className='mx-3'>TV Shows</li>
             <li className='mx-3'>Actors</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header



