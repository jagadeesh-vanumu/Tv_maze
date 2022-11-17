import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
  return (
    <header className='flex flex-row justify-between pr-10 bg-black'>
        <img src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1__4x.png" alt = "netflix-logo" className='w-52 h-32 bg-black'/>
        <div className='flex flex-col justify-center'>
          <nav className='md:hidden items-end'>
            <MenuIcon style={{color:"white"}}/>
          </nav>
          <nav className='hidden md:block'>
            <ul className='flex flex-row justify-center items-center h-full text-white font-bold'>
             <li className='mx-3'>Home</li>
             <li className='mx-3'>TV Shows</li>
             <li className='mx-3'>Actors</li>
            </ul>
        </nav>
      
        </div>
       
       
        
    </header>
  )
}

export default Header



