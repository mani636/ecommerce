import React from 'react';
import './Home.css';
import {
  CategoriesSection,
  HeroSection,
  HeroVideo,
  VideosSection,
} from './components';
import Fooder from '../../components/Fooder/Fooder';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='hero'>
        <HeroVideo />
        <HeroSection />
        <VideosSection />
        <CategoriesSection />
        <Fooder />
      </div>
    </div>
  );
};

export default Home;
