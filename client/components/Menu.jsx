"use client";
import React from 'react'
import "../styles/Menu.css"
import { IoPersonCircle } from 'react-icons/io5';
import { GoSettings } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import Link from 'next/link'
import { useState } from 'react'


function Menu() {

    const [toggle, setToggle] = useState(false);
    const collapseMenu = () => {
        setToggle(!toggle);
    }

  return (
        <div id="menuToggle">
            <input type="checkbox" onChange={collapseMenu} checked={toggle}/>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <Link href="../details"><li className="menu--items" onClick={collapseMenu}><IoPersonCircle className="menu--icons"/> Account</li></Link>
            <Link href="../settings"><li className="menu--items" onClick={collapseMenu}><GoSettings className="menu--icons"/> Settings</li></Link>
            <Link href="../contact"><li className="menu--items" onClick={collapseMenu}><MdOutlineEmail className="menu--icons"/> Contact</li></Link>
            <Link href="../about"><li className="menu--items" onClick={collapseMenu}><FiInfo className="menu--icons"/> About</li></Link>
            <Link href="#"><li>Sign out</li></Link>
            </ul>
        </div>
  )
}

export default Menu