import React from 'react';
import Image from 'next/image';
import '../../styles/About.css';

const About = () => (
  <main className="main main--container">
    <div className="about--about">About ZenPay</div>
    <div className="about--container">
      <Image className="about--image" src="/../public/about-pic.jpeg" alt="about-us" width={360} height={250} />
      <p className="about--description">
        Our mission is to unlock the power of a borderless economy, for everyone.
        Financial services are the backbone of our society, and our goal is to make
        them work for as many individuals and businesses as possible.
        We want to grow the global economy by providing everyone with frictionless,
        accessible financial products.
      </p>
    </div>
  </main>
);

export default About;
