import React from "react";
import "../styles/Footer.css";
import { TfiWallet } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonCircle } from 'react-icons/io5';
import Link from 'next/link'

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer--menu">
        <Link href="../wallet"><div className="footer--icons--wallet"><TfiWallet /></div></Link>
        <Link href="../"><div className="footer--icons--home"><AiOutlineHome /></div></Link>
        <Link href="../details"><div className="footer--icons--profile"><IoPersonCircle /></div></Link>
      </div>
    </div>
  );
}

export default Footer;
