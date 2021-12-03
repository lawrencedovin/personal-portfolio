import React from 'react';


function Hero() {
  return(
    <div className="hero" data-testid="Hero">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        <div className="hero__container--left">
            <div className="hero__details">
              <div className="hero__name">
                LAWRENCE DOVIN
              </div>
              <div className="hero__underline--big"></div>
              <div className="hero__underline--small"></div>
              <div className="hero__title">
                  Software Engineer
              </div>
              <a href="/" className="hero__contact-btn btn"><span>Contact Me</span></a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="hero__container--right">
            {/* <div className="hero__frame">
              <img src={process.env.PUBLIC_URL + 'hero-image.jpg'} className="hero__image" alt="lawrence"/>
            </div> */}
            <img src={process.env.PUBLIC_URL + 'mountain.jpg'} className="hero__image" alt="mountains"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
