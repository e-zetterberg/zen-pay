import React from 'react'
import Image from 'next/image'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header--navbar'>
            <div className='navbar--user'>
            <Image src="/../public/profile.png" alt="Logo" width={55} height={53}></Image>
            </div>
            <div>
                <Image src="/../public/logo-transparent.png" alt="Logo" width={211} height={73}></Image>
            </div>
            <div className='navbar--burger'>
                &#9776;
            </div> 
        </nav>
    </header>
  )
}

export default Header