import React from 'react';
import SimpleAccordion from '../../components/Accordion';
import '../../styles/contact.css';

function Contact() {
  return (
    <main className="main contact--container">
      <div className="contact--contents">
        <div className="contact--title">Contact</div>
        <SimpleAccordion className="contact--accordion" />
      </div>
    </main>
  );
}

export default Contact;
