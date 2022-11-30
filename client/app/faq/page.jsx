'use client';

import React from 'react';
import '../../styles/Faq.css';
import MotionProvider from '../../components/MotionProvider';
import AccordianWrapper from '../../components/AccordianWrapper';

const Faq = () => (
  <MotionProvider>
    <main className="main faq--container">
      <div className="faq--contents">
        <div className="faq--page-title">Frequently Asked Questions</div>
        <AccordianWrapper />
      </div>
    </main>
  </MotionProvider>
);

export default Faq;
