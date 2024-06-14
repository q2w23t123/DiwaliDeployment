import React from 'react';
import './Participation.css';

const Participation = () => {
    return (
        <div className="participation-page">

            <div className="title-breadcrumb-container">
                <div className="participation-title">Participation</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Participation
                </div>
            </div>

            <section className="participation-section">
                <div className="participation-categories">
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation1.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Performers</h3>
                        <button className="category-button">Click to Perform</button>
                    </div>
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation2.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Stall</h3>
                        <button className="category-button">Click For Stall</button>
                    </div>
                    <div className="category">
                        <div className="category-image-container">
                            <img src="/Participation3.png" alt="Performers" className="category-image" />
                        </div>
                        <h3>Community Group</h3>
                        <button className="category-button">Click to Register</button>
                    </div>
                </div>
            </section>

        </div>
    )

};

export default Participation;