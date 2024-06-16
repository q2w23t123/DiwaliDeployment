import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
    return (
        <div className="key-features-page">

            <div className="title-breadcrumb-container">
                <div className="key-features-title">Key Features</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Key Features
                </div>

            </div>

            <div className="features-container">
                <div className="feature-item">
                    <img src="undercover_venue.png" alt="Undercover Venue" />
                    <h2>Undercover Venue</h2>
                    <div className="features-underline"></div>
                    <p>Celebrate Diwali rain or shine, with undercover venue ensuring uninterrupted festivities.</p>
                </div>
                <div className="feature-item">
                    <img src="accessibility.png" alt="Accessibility" />
                    <h2>Accessibility</h2>
                    <div className="features-underline"></div>
                    <p>Making it effortless for everyone to attend and be part of the festivities.</p>
                </div>
                <div className="feature-item">
                    <img src="inclusive.png" alt="Inclusive" />
                    <h2>Inclusive</h2>
                    <div className="features-underline"></div>
                    <p>Embrace all backgrounds, ages, and abilities, ensuring every individual feels represented, valued, and an integral part of the celebration. From diverse cultural showcases to accommodating special needs, we aim to celebrate the spirit of Diwali in its truest sense.</p>
                </div>
            </div>


        </div>


)


};
export default KeyFeatures;