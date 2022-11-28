/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import '../../styles/contactform.css';
import MotionProvider from '../../components/MotionProvider';

const ContactForm = () => (
  <MotionProvider>
    <div className="contact-page-container">
      <div>
        <p className="contact-us">Contact us</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <input className="contact-field" placeholder="Full name" />
          <input className="contact-field" placeholder="Email address" />
          <textarea className="contact-field-message" placeholder="Send us your message here" />
          <button className="global--btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  </MotionProvider>
);

export default ContactForm;
