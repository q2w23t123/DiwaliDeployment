import React, { useEffect, useState } from 'react';
import './SponsorsPartners.css';
import { useParams } from 'react-router-dom';

const SponsorsPartners = () => {
    const [data, setData] = useState({ sections: [] });
    const { year } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/sponsors/${year}`);
            const fetchedData = await response.json();
            setData(fetchedData);
        };

        fetchData();
    }, [year]);

    const getDirectLink = (url) => {
        const match = url.match(/\/d\/(.*?)\//);
        if (match) {
            const directLink = `https://drive.google.com/thumbnail?id=${match[1]}&sz=w500`;
            console.log(`Original URL: ${url}, Direct Link: ${directLink}`);
            return directLink;
        }
        return url;
    };

    return (
        <div className="sponsors-partners-page">
            <div className="title-breadcrumb-container">
                <div className="sponsors-partners-page-title">Sponsors & Partners {year}</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > Sponsors & Partners {year}
                </div>
            </div>

            <div className ="sponsors-partners-page-background">
            {data.sections.map((section, index) => (
                <section key={index} className={section.title.toLowerCase().replace(/ /g, '-')}>
                    <h1>{section.title}</h1>
                    <div className="image-container">
                        {section.images.map((image, imgIndex) => (
                            <img key={imgIndex} src={getDirectLink(image.src)} alt={image.alt} />
                        ))}
                    </div>
                </section>
            ))}
            </div>
        </div>
    );
};

export default SponsorsPartners;
