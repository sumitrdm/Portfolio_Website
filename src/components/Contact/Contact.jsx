import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to Contact me? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form  action="https://formspree.io/f/mgerzznp" method="POST" className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        name="_replyto"
                        type='email'
                        placeholder='Your Email ID'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/sumitrdm' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href="https://www.linkedin.com/in/sumit-kumar-a11338195/"
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://instagram.com/sumti_rdm'
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>
               
            </div>

            <Footer
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;