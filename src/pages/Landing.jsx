import React from 'react';
import im1 from '../assets/i1.avif';
import im2 from '../assets/i2.avif';
import im3 from '../assets/i3.avif';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel style={{ paddingTop: '70px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im3}
            alt="First slide"
            height="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im1}
            alt="Second slide"
            height="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im2}
            alt="Third slide"
            height="250px"
          />
        </Carousel.Item>
      </Carousel>

      {/* Hero Section with Background Balls */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: '80vh',
          color: 'black',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h2 className="fw-bold">Your Event Awaits</h2>
        <p>Discover amazing experiences near you.</p>
        <Link className="btn btn-primary rounded p-3 fs-5 animate__animated animate__fadeIn" to="/home">
          Explore Events
        </Link>

        {/* Background Balls in Purple Tones */}
        <div className="ball purple-light"></div>
        <div className="ball purple-medium"></div>
        <div className="ball purple-dark"></div>
        <div className="ball purple-darker"></div>
        <div className="ball purple-lighter"></div>
        <div className="ball purple-medium-dark"></div>
      </div>
    </>
  );
};

export default Landing;
