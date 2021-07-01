/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Web developer | Flutter developer | YouTuber | New Technos'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Web developer</h3>
                    <p className='about-details'>
                        I am a web developer have a good knowledge in HTML,CSS,JavaScript,Jquery,bootstrap and MERN(MongoDB,Express.js,React.js,Node.js).{' '}
                        <Link
                            className='about-link-element'
                            to="/projects"
                        >
                            Check out my projects!
                        </Link>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Flutter developer</h3>
                    <p className='about-details'>
                        Have a good knowledge in Flutter and dart.
                        {' '}
                        <Link
                            className='about-link-element'
                            to="/projects"
                        >
                            Check out my projects!
                        </Link>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Youtuber</h3>
                    <p className='about-details'>
                        Youtube is my passion, I provide free online courses and various training with free certificates!
                        {' '}
                        <a
                            className='about-link-element'
                            href='https://www.youtube.com/channel/UCkHvLRT7b6_hmfWVPn3jdGw'
                            target="_blank"
                        >
                            Check my channel!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;