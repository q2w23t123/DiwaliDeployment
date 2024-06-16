import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GalleryPage.css';

const GalleryPage = () => {
    const [data, setData] = useState({
        embeds: [],
        links: [],
        images: [],
        full_date: ""
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const { year } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/gallery/${year}`);
                const result = await response.json();
                setData(result);
                // console.log("result:", result.embeds);
            } catch (error) {
                console.error("Error fetching the gallery data:", error);
            }
        };

        fetchData();
    }, [year]);

    const openModal = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const getDirectLink = (url) => {
        const match = url.match(/\/d\/(.*?)\//);
        const directLink = match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1200` : url;
        // console.log(`Original URL: ${url}, Direct Link: ${directLink}`);
        return directLink;
    };

    const nextImage = () => {
        const index = data.images.indexOf(currentImage);
        const nextIndex = (index + 1) % data.images.length;
        setCurrentImage(data.images[nextIndex]);
    };

    const previousImage = () => {
        const index = data.images.indexOf(currentImage);
        const prevIndex = (index - 1 + data.images.length) % data.images.length;
        setCurrentImage(data.images[prevIndex]);
    };

    return (
        <div className="gallery-2023">
            <div className="title-breadcrumb-container">
                <div className="gallery-2023-title">Gallery {year}</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > <a href="/gallery">Gallery</a> > {year}
                </div>
            </div>

            <div className="gallery2023-item-background">
                <div className="gallery2023-subtitle">Videos</div>
                <div className="gallery2023-embeds">
                    {data.embeds.map((embed, index) => (
                        <div key={index} className="gallery2023-embed">
                            <div dangerouslySetInnerHTML={{ __html: embed }}></div>
                        </div>
                    ))}
                </div>

                <div className="gallery2023-subtitle">Articles</div>
                <div className="gallery2023-links">
                    <ul>
                        {data.links.map((link, index) => (
                            <li key={index} className="gallery2023-link-item">
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <img src={getDirectLink(link.image)} alt={link.headline} className="gallery2023-linked-image" />
                                    <div className="gallery2023-link-headline">{link.headline}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery2023-subtitle">{data.full_date}</div>
                <div className="gallery2023-images">
                    {data.images.map((image, index) => (
                        <div key={index} className="gallery2023-image-container" onClick={() => openModal(image)}>
                            <img src={getDirectLink(image.src)} alt={image.alt} className="gallery2023-image" />
                        </div>
                    ))}
                </div>

                {modalOpen && (
                    <div className="modal">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img className="modal-content" src={getDirectLink(currentImage.src)} alt={currentImage.alt} />
                        <button className="prev" onClick={previousImage}>&#10094;</button>
                        <button className="next" onClick={nextImage}>&#10095;</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;

