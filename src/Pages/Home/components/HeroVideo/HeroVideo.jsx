import React from 'react';
import ReactPlayer from 'react-player';
import './HeroVideo.css';

const HeroVideo = () => {
  return (
    <div className='hero-video-container'>
      <div className='hero-video'>
        <ReactPlayer
          url='https://res.cloudinary.com/darwtgzlk/video/upload/v1687841755/Ecommerce-app/video-3_bvxghi.mp4'
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <div className='hero-text'>
        <h1>Sneak into Extraordinary</h1>
        <h2>Where Adventure Meets Style in Quirky Sneaker Bliss</h2>
      </div>

      <button className='shop-now-btn'>Shop Now</button>
    </div>
  );
};

export default HeroVideo;
