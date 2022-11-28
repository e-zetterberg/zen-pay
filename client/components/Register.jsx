import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Register.css';

const Register = () => (
  <main className="main create-account-container">
    <div className="create-account-text">Create your ZenPay account</div>
    <Image src="/../public/create-account.png" alt="create-account" width={260} height={250} />
    <Link href="/register">
      <button type="button" className="create-account-btn">Register</button>
    </Link>
  </main>
);

export default Register;
