import React from 'react'
import Image from 'next/image'
import "../styles/Header.css"
import Menu from "./Menu"

function Header() {
  return (
    <div className="header--container">
        <Menu className="header--menu"/>
        <Image className="header--logo" src="/logo-transparent.png" alt="Logo" width={211} height={73}></Image>
        <span className="align--span"></span>
    </div>
  )
}

export default Header