'use client';

import React from 'react';
import SimpleAccordion from '../../components/Accordion';
import '../../styles/Faq.css';
import MotionProvider from '../../components/MotionProvider';

const Faq = () => (
  <MotionProvider>
    <main className="main faq--container">
      <div className="faq--contents">
        <div className="faq--page-title">Frequently Asked Questions</div>
        <SimpleAccordion className="faq--accordion" />
      </div>
    </main>
  </MotionProvider>
);

export default Faq;
