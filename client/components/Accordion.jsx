'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

const SimpleAccordion = () => (
  <div>
    <Accordion>
      <AccordionSummary
        className="accordion--panel"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className="faq--question">How do I get in touch with you?</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="faq--answer">
          You can send us your query through
          {' '}
          <Link className="redirect-link-to-form" href="./contactform">this contact form.</Link>
        </p>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        className="accordion--panel2"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <p className="faq--question">How can I add money to my ZenPay account?</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="faq--answer">
          At ZenPay, you can add money to your account using any credit or debit card.
        </p>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        className="accordion--panel2"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <p className="faq--question">How do I send money to another ZenPay account?</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="faq--answer">
          To transfer funds to another ZenPay account, select Send on the Wallet page.
          You will be asked to add the ZenPay account details for either an Individual,
          or a Business if you are paying a company.
        </p>
      </AccordionDetails>
    </Accordion>

  </div>
);

export default SimpleAccordion;
