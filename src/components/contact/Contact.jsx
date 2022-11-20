import React from 'react'
import './contact.css'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rlyw1qt', 'template_va4r85z', form.current, 'tk5gPMNdGnJLVGVKs')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anshul.rai994@gmail.com</h5>
            <a href="mailto:anshul.rai994@gmail.com" target='_blank'>Drop a mail</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Anshul Rai</h5>
            <a href="https://www.linkedin.com/in/anshul-rai-755a3816b/" target='_blank'>Connect with me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact