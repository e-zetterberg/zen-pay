/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';
import '../../styles/contactform.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import MotionProvider from '../../components/MotionProvider';

const ContactForm = () => {
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
    toast.success('Message sent successfully !');
    router.push('/');
    router.refresh();
  };
  return (
    <MotionProvider>
      <div className="contact-page-container">
        <div>
          <p className="contact-us">Contact us</p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <input className="contact-field" placeholder="Full name" />
            <input className="contact-field" placeholder="Email address" />
            <textarea className="contact-field-message" placeholder="  Write your message here" />
            <div className="contact-">
              <button className="send--btn" onClick={(e) => handleClick(e)} type="submit">
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
    </MotionProvider>
  );
};

export default ContactForm;
