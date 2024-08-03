import React from 'react';
import './About.css';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title={'About us'}>
      <div className='about-container'>
        <h1>Welcome to <div className='logo-text inline-block bg-grey-100'>TourMitr</div></h1>
        <p>
          TourMitr is your ultimate travel companion, designed to help you explore new cities with ease and confidence. We know that visiting a new place can be overwhelming, so we've created a platform that provides comprehensive guides to the best attractions in each city. Our mission is to simplify your travel planning by offering detailed descriptions, ratings, and user reviews for a wide range of places, from historical sites and parks to hidden gems and local favorites.
        </p>
        <p>
          Our unique feature is personalized recommendations based on your interests. Whether you're a history buff, foodie, nature lover, or adventure seeker, TourMitr tailors suggestions to match your preferences, ensuring a memorable and enjoyable experience.
        </p>
        <p>
          Our team of travel enthusiasts and tech experts works tirelessly to gather authentic insights from locals and experienced travelers. We aim to build a community where users can share their experiences, leave reviews, and inspire others.
        </p>
        <p>
          Join us at TourMitr and make your next trip unforgettable. Discover the best places to visit, find hidden treasures, and enjoy personalized recommendations that make exploring new cities a breeze.
        </p>
        <p className='signature'>
          Happy exploring,<br />
          <strong>The TourMitr Team</strong>
        </p>
      </div>
    </Layout>
  );
};

export default About;
