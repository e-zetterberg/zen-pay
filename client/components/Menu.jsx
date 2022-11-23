import React from 'react'
import "../styles/Menu.css"
import { IoPersonCircle } from 'react-icons/io5';
import { GoSettings } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import Link from 'next/link'


function Menu() {
  return (
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <input className="lala" type="checkbox"/>
            <Link href="../details"><li className="menu--items"><IoPersonCircle className="menu--icons"/> Account</li></Link>
            <Link href="#"><li className="menu--items"><GoSettings className="menu--icons"/> Settings</li></Link>
            <Link href="#"><li className="menu--items"><MdOutlineEmail className="menu--icons"/> Contact</li></Link>
            <Link href="#"><li className="menu--items"><FiInfo className="menu--icons"/> About</li></Link>
            <Link href="#"><li>Sign out</li></Link>
            </ul>
        </div>
  )
}

export default Menu