import React from 'react';


function Hero() {
  return(
    <div className="hero" data-testid="Hero">
      <div className="hero__container--left">
        <div className="hero__details">
          <div className="hero__name">
            Lawrence Dovin
          </div>
          <div className="hero__underline--big"></div>
          <div className="hero__underline--small"></div>
          <div className="hero__title">
            Software Engineer
          </div>
          <a href="/" className="hero__contact-btn">Contact Me</a>
        </div>
      </div>
      <div className="hero__container--right">
        right
      </div>
    </div>
  );
}

export default Hero;
