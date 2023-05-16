import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import './Footer.scss';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_cvfbmwk', 'template_dh9v3up', form.current, 'DZCUEZ6WRLkmCmt66')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <h2 className='head-text'>
        Take a Coffee & chat with me!
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img
            src={images.email}
            alt="email"
          />
          <a href="mailto:raphaelventura55@gmail.com" className='p-text'>raphaelventura55@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img
            src={images.mobile}
            alt="mobile"
          />
          <a href="tel: +49 178 577 0966" className='p-text'>+49 178 577 0966</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <form
        ref={form}
        onSubmit={handleSubmit}
        className='app__footer-form app__flex'
      >
        <div className='app__flex'>
          <input
            type="text"
            className='p-text'
            placeholder='Your Name'
            name='user_name'
          />
        </div>
        <div className='app__flex'>
          <input
            type="email"
            className='p-text'
            placeholder='Your Email'
            name='user_email'
          />
        </div>
        <div>
          <textarea
            placeholder='Your Message'
            className='p-text'
            name='message'
          />
        </div>
        <button
          type='submit'
          className='p-text'
        >
          {loading ?
          'Sending' : 'Send Message' }
        </button>
      </form>
      : <div>
          <h3 className='head-text'>
            Thank you for getting in touch!
          </h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
