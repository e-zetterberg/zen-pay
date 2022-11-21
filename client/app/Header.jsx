import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header--navbar'>
            <Link href="/login">
            <div className='navbar--logo'>
                <Image src="/../public/logo-transparent.png" alt="Logo" width={211} height={73}></Image>
            </div>
            </Link>

            <section className='navbar-menu'>
              <Link href="/accountDetails">
            <div className='navbar--user'>
                <Image src="/../public/profile.png" alt="Logo" width={55} height={53}></Image>
            </div>
              </Link>
            <Link href="/account">
              <div className='navbar--burger'>
                  &#9776;
              </div> 
            </Link>
            </section>
        </nav>
    </header>
  )
}

export default Header