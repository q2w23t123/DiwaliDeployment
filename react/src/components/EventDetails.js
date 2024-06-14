import React from 'react';
import './EventDetails.css';
import { useNavigate } from 'react-router-dom';

const EventDetails = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/oct-19');
    };

    return (
        <div className="event-details-page">

            <div className="title-breadcrumb-container">
                <div className="event-detail-title">Event Details</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Event Details
                </div>
            </div>

            <section className="event-details">
                <div className="event-content">
                    <div className="event-image-container">
                        <img
                            src="/EventDetailImage.jpg"
                            alt="Event"
                            className="event-image"
                        />
                    </div>
                    <h3>Marvel Stadium</h3>
                    <p>26th October, 2024</p>
                    <button className="learn-more-btn" onClick={handleLearnMoreClick} >Learn more</button>
                </div>
            </section>
        </div>
    )


};
export default EventDetails;

