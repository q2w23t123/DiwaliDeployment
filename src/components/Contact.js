import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">

            <div className="title-breadcrumb-container">
                <div className="contact-title">Contact</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Contact
                </div>
            </div>

            <div className="form-contact-container">


                <iframe
                    src="https://forms.monday.com/forms/embed/417392308614074edd0149848a4311bb?r=use1"
                    title="Monday Form"
                ></iframe>


                <div className="contact">

                    <h2>Contact Info</h2>
                    <div className="contact-underline"></div>
                    <p>
                        <i className="fa fa-phone" aria-hidden="true" style={{ color: '#f82c2c' }}></i>
                        <a href="tel:+61413178250">+61 413 178 250</a>
                    </p>
                    <p>
                        <i className="fas fa-envelope" aria-hidden="true" style={{ color: '#f82c2c' }}></i>
                        <a href="mailto:info@melbournediwali.com.au">info@melbournediwali.com.au</a>
                    </p>
                </div>

            </div>

        </div>
    )


};
export default Contact;
