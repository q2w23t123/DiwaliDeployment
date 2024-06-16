import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false,
  };

  const getDirectLink = (url) => {
    const match = url.match(/\/d\/(.*?)\//);
    if (match) {
      const directLink = `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1500`;
      // console.log(`Original URL: ${url}, Direct Link: ${directLink}`);
      return directLink;
    }
    return url;
  };

  const [data, setData] = useState({ images: [] });

  useEffect(() => {
    (async () => {
      const fetchedData = await (await fetch('/api/carousel')).json();
      setData(fetchedData);
    })();
  }, []);

  const handleError = (event) => {
    console.error('Error loading image:', event.target.src);
  };

  return (
      <div style={{ overflowX: 'hidden' }}>
        <Slider {...settings}>
          {data.images.map((img, idx) => (
              <div key={idx} className="carousel-slide">
                <img
                    src={getDirectLink(img.src)}
                    alt={img.alt}
                    className="carousel-image"
                    onError={handleError}
                />
              </div>
          ))}
        </Slider>
      </div>
  );
}

export default Carousel;

