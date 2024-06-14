import React, { useState } from 'react';
import './Gallery.css'; // Ensure CSS file is correctly imported

// Import images
import diwali2024 from './diwali_2024.png';
import diwali2023 from './diwali_2023.png';
import diwali2022 from './diwali_2022.png';

const Gallery = () => {
    const [images, setImages] = useState([
        { src: diwali2024, alt: "Melbourne Diwali 2024", title: "Melbourne Diwali 2024", link: "/gallery/2024" },
        { src: diwali2023, alt: "Melbourne Diwali 2023", title: "Melbourne Diwali 2023", link: "/gallery/2023" },
        { src: diwali2022, alt: "Melbourne Diwali 2022", title: "Melbourne Diwali 2022", link: "/gallery/2022" },
    ]);

    return (
        <div className="gallery-page">
            <div className="title-breadcrumb-container">
                <div className="gallery-page-title">Gallery</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Gallery
                </div>
            </div>

            <div className="gallery-links">
                <ul>
                    {images.map((image, index) => (
                        <li key={index}>
                            <a href={image.link}>
                                <img src={image.src} alt={image.alt} className="gallery-image" />
                                <span className="image-title">{image.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Gallery;


