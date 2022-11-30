import React from 'react';
import Image from 'next/image';
import '../../styles/about.css';
import MotionProvider from '../../components/MotionProvider';

const About = () => (
  <MotionProvider>
    <main className="main main--container">
      <div className="about--about">About us</div>
      <div className="about--container">
        <Image className="about--image" src="/string-quartet.png" alt="about-us" width={360} height={280} />
        <p className="about--description">
          Our mission is to unlock the power of a borderless economy, for everyone.
          Financial services are the backbone of our society, and our goal is to make
          them work for as many individuals and businesses as possible.
          We want to grow the global economy by providing everyone with frictionless,
          accessible financial products.
        </p>
      </div>
    </main>
  </MotionProvider>
);

export default About;
