import React from 'react';
import Carousel from "./Carousel";
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const videos = [
    {
        title: 'Celebrations light up Melbourne',
        platform: 'facebook',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F7NEWSMelbourne%2Fvideos%2F196316410114512%2F&show_text=false&width=560&t=0',
    },
    {
        title: 'Beautiful Message to Melbourne Diwali',
        platform: 'facebook',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSBSHindi%2Fvideos%2F875082194064573%2F&show_text=false&width=560&t=0',
    },
    {
        title: 'xxx',
        platform: 'facebook',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMelbourneDiwali%2Fvideos%2F1033519074566488%2F&show_text=false&width=560&t=0',
    },
    {
        title: 'Australia Lights Up To Celebrate Diwali',
        platform: 'youtube',
        embedUrl: 'https://www.youtube.com/embed/zj2wxq4fpT4', // the given video's ID
    }
];

function HomePage() {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/oct-19');
    };


    return (
        <div>
            <Carousel />
            <div className="video-gallery">
                <h2>Relive the Experience of Melbourne Diwali 2023</h2>
                <div className="videos">
                    {videos.map((video, index) => (
                        <div key={index} className="video">
                            <iframe
                                src={video.embedUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                                className={video.platform}
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
            <section className="event-details">
                <div className="event-content">
                    <h2>Event Details</h2>
                    <div className="homepage-event-image-container">
                        <img
                            src="/EventDetailImage.jpg"
                            alt="Event"
                            className="homepage-event-image"
                        />
                    </div>
                    <h3>Marvel Stadium</h3>
                    <p>26th October, 2024</p>
                    <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn more</button>
                </div>
            </section>
            <section className="participation-section">
                <h2>Participation</h2>
                <div className="participation-categories">
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation1.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Performers</h3>
                        <a href="https://forms.monday.com/forms/9e1369327d0447ce3c6c512de30c04fd?r=use1" target="_blank" rel="noopener noreferrer">
                            <button className="category-button">Click to Perform</button>
                        </a>
                    </div>
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation2.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Stall</h3>
                        <a href="https://forms.monday.com/forms/9e1369327d0447ce3c6c512de30c04fd?r=use1" target="_blank" rel="noopener noreferrer">
                            <button className="category-button">Click For Stall</button>
                        </a>
                    </div>
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation3.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Community Group</h3>
                        <a href="https://forms.monday.com/forms/9e1369327d0447ce3c6c512de30c04fd?r=use1" target="_blank" rel="noopener noreferrer">
                            <button className="category-button">Click to Register</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
