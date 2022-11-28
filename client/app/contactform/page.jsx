/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import '../../styles/contactform.css';
import MotionProvider from '../../components/MotionProvider';

const ContactForm = () => (
  <MotionProvider>
    <div className="contact--container">
      <div>
        <p className="contact-us">Contact us</p>
      </div>
      <form className="contact-form">
        <input className="balloon" placeholder="Email address" />
        <input className="contact-field-email" placeholder="email" />
        <textarea className="contact-field-message" placeholder="email" />
        <button className="global--btn" type="submit">
          Send
        </button>
      </form>
    </div>
  </MotionProvider>
);

export default ContactForm;
