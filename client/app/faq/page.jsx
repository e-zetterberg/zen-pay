'use client';

import React from 'react';
import SimpleAccordion from '../../components/Accordion';
import '../../styles/Faq.css';

const Faq = () => (
  <main className="main faq--container">
    <div className="faq--contents">
      <div className="faq--page-title">FAQ</div>
      <SimpleAccordion className="faq--accordion" />
    </div>
  </main>
);

export default Faq;
