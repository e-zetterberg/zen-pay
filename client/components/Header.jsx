import React from 'react'
import Image from 'next/image'
import "../styles/Header.css"
import Menu from "./Menu"

function Header() {
  return (
    <header className='header'>
      <nav className='header--navbar'>
        <Image className="header--logo" src="/logo-transparent.png" alt="Logo" width={211} height={73}></Image>
        <span className="align--span"></span>
        <Menu className="header--menu"/>
      </nav>
    </header>
  )
}

export default Header