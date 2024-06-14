import React, { useState } from 'react';
import './BusinessLounge.css';

const BusinessLounge = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const BusinessLoungeImages = [
        "bl_1.png", "bl_2.png", "bl_3.png", "bl_4.png",
        "bl_5.png", "bl_6.png", "bl_7.png", "bl_8.png",
        "bl_9.png", "bl_10.png", "bl_11.png", "bl_12.png"
    ];

    const openModal = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        const index = BusinessLoungeImages.indexOf(currentImage);
        const nextIndex = (index + 1) % BusinessLoungeImages.length;
        setCurrentImage(BusinessLoungeImages[nextIndex]);
    };

    const previousImage = () => {
        const index = BusinessLoungeImages.indexOf(currentImage);
        const prevIndex = (index - 1 + BusinessLoungeImages.length) % BusinessLoungeImages.length;
        setCurrentImage(BusinessLoungeImages[prevIndex]);
    };
    return (
        <div className="business-lounge-page">

            <div className="title-breadcrumb-container">
                <div className="business-lounge-title">Business Lounge</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Business Lounge
                </div>
            </div>

            <section className="business-lounge-section">
                <img src="BL.png" alt="Business Lounge" className="business-lounge-image"/>
                <div className="business-lounge-content">
                    <h2>Business Lounge</h2>
                    <p>Business Lounge - an exclusive experience tailored for corporate networking, high-level discussions, and an intimate cultural celebration. Engage with business professionals, community leaders and esteemed guests in a premium environment.</p>
                </div>
            </section>

            <section className="image-lounge">
                <div className="lounge-grid">
                    {BusinessLoungeImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Business Lounge ${index + 1}`}
                            className="lounge-image"
                            onClick={() => openModal(img)}
                        />
                    ))}
                </div>
            </section>


            {modalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Full Size" />
                    <div className="caption">Melbourne Diwali 2023</div>
                    <button className="prev" onClick={previousImage}>&lt;</button>
                    <button className="next" onClick={nextImage}>&gt;</button>
                </div>
            )}
        </div>
    );
};

export default BusinessLounge;