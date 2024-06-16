import React from 'react';
import './OurTeam.css';

const teamMembers = [
    { title: "Production", image: "/Production.png" },
    { title: "Cultural Committee", image: "/CulturalCommittee.png" },
    { title: "Operations", image: "/Operations.png" },
];

const OurTeam = () => {
    return (
        <div className="our-team-page">
            <div className="title-breadcrumb-container">
                <div className="our-team-title">Our Team</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Our Team
                </div>
            </div>
            <div className="team-background">
                <div className="team-section">
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-item">
                                <img src={member.image} alt={member.title} className="team-image" />
                                <h3>{member.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;

