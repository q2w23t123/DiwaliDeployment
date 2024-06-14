import React from 'react';
import './BottomBar.css'; // Make sure to create a BottomBar.css file
import { ReactComponent as MailIcon } from './mail-icon.svg';
import { ReactComponent as TickIcon } from './tick-icon.svg';
const BottomBar = () => {
    return (
        <div className="bottom-bar-container">

            <div className="bottom-bar">
                <span className="bottom-bar-title">MELBOURNE DIWALI</span>
                <div className="bottom-bar-email">
                    <MailIcon className="mail-icon" />
                    <input type="email" placeholder="" />
                </div>
                <button className="bottom-bar-button">
                    <TickIcon className="tick-icon" />
                    <span className="button-text">Update</span>
                </button>
            </div>

            <div className="flag-container">
                <img src="/flag.png" alt="Flag" className="flag" />
            </div>

            <div className="footer-content">
                <div className="footer-nav">
                    <a href="/">HOME</a>
                    <a href="/about-us">ABOUT US</a>
                    <a href="/event-details">EVENT DETAILS</a>
                    <a href="/participation">PARTICIPATION</a>
                    <a href="/contact">CONTACT</a>
                </div>
                <div className="contact-info">
                    <p>Email : <a href="mailto:info@melbournediwali.com.au">info@melbournediwali.com.au</a></p>
                    <p>Phone : <a href="tel:+61413178250">+61 413 178 250</a></p>

                    <a href="https://www.facebook.com/MelbourneDiwali" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/melbourne.diwali/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@MelbourneDiwali?si=7jJTtcH9YtB1vbiY" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="YouTube" className="social-icon" />
                    </a>
                    <a href="https://www.tiktok.com/@melbournediwalii" target="_blank" rel="noopener noreferrer">
                        <img src="/tiktok.png" alt="TikTok" className="social-icon" />
                    </a>
                </div>
                <div className="footer-acknowledgment">
                    <h1>Acknowledgment of Country</h1>
                    <p>We acknowledge the Traditional Owners of the land where we work and live. We
                        pay our respects to their Elders, past, present, and emerging. We celebrate the
                        stories, culture, and traditions of Aboriginal and Torres Strait Islander Elders of all
                        communities who also work and live on this land.</p>
                </div>

            </div>

        </div>

    );
};

export default BottomBar;
