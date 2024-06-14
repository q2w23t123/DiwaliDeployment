import React from 'react';
import './Oct19.css';
import { useNavigate } from 'react-router-dom';

const activities = [
    { title: "Clothes Stall", image: "/ClothesStall.png" },
    { title: "Jewellery Stall", image: "/JewelleryStall.png" },
    { title: "Heena Artists", image: "/HeenaArtists.png" },
    { title: "Kid's Activities", image: "/KidsActivities.png" },
    { title: "On Stage Performance", image: "/OnStagePerformance.png" },
    { title: "Performers Appreciation", image: "/PerformersAppreciation.png" },
];

const Oct19 = () => {
    const navigate = useNavigate();

    return (
        <div className="oct19-page">
            <div className="title-breadcrumb-container">
                <div className="oct19-title">October 26th</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > October 26th
                </div>
            </div>

            <div className="oct19-page-background">
                <section className="activities-section">
                    <h2>Activities</h2>
                    <div className="activities-grid">
                        {activities.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <img src={activity.image} alt={activity.title} className="activity-image" />
                                <h3>{activity.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="food-court-section">
                    <h2>Food court</h2>
                    <div className="food-court-grid">
                        <div className="food-court-item">
                            <h3>Indian spicy</h3>
                            <img src="/IndianSpicy.png" alt="Indian spicy" className="food-court-image" />
                            <p>Experience the authentic heat and flavors of original Indian spicy cuisine in our vibrant food court, where traditional recipes bring a delightful kick to your taste buds.</p>
                        </div>
                        <div className="food-court-item">
                            <h3>Aussie Indian Fusion</h3>
                            <img src="/AussieIndianFusion.png" alt="Aussie Indian Fusion" className="food-court-image" />
                            <p>Savor the unique fusion of Australian-Indian cuisine in our food court. Enjoy a harmonious blend of flavors, balancing the spice level to cater to diverse palates and culinary preferences.</p>
                        </div>
                    </div>
                </section>

                <section className="schedule-section">
                    <h2>Schedule</h2>
                    <div className="schedule-container">
                        <div className="schedule-item">
                            <span className="schedule-date">26th October</span>
                            <span className="schedule-description">We are cooking something special. Hope to see you soon.</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Oct19;

