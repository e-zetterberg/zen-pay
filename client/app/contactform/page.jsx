/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import '../../styles/contactform.css';

const ContactForm = () => (
  <div className="contact--container">
    <div>
      <p className="contact-us">Contact us</p>
    </div>
    <div className="contact--name">
      <div className="contact--categories">Full name *</div>
      <div className="col-xs-12">
        <div className="styled-input wide">
          <input type="text" required />
        </div>
      </div>
      <div className="contact--categories">Email *</div>
      <div className="col-md-6 col-sm-12">
        <div className="styled-input">
          <input type="text" required />
        </div>
      </div>
      <div className="contact--categories">Your message *</div>
      <div className="col-xs-12">
        <div className="styled-input wide">
          <textarea required />
        </div>
      </div>
      <div className="col-xs-12">
        <div className="btn-lrg submit-btn">Send</div>
      </div>
    </div>
  </div>

);

export default ContactForm;
