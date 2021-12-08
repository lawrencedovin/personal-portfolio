import React from 'react';
import PropTypes from 'prop-types';


function Preview() {
  return (
    <div className="row hero__container--preview">
        <div className="col-md-4 hero__item--preview">
          <div className="hero__image-container--preview">
            <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          </div>
          <a href="/" className="hero__button--preview hero__button--preview-about btn"><span>ABOUT</span></a>
        </div>
        <div className="col-md-4 hero__item--preview">
          <div className="hero__image-container--preview">
            <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          </div>
          <a href="/" className="hero__button--preview hero__button--preview-resume btn"><span>RESUME</span></a>
        </div>

        
        <div className="col-md-4 hero__item--preview">
          <div className="hero__image-container--preview">
            <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          </div>
          <a href="/" className="hero__button--preview hero__button--preview-portfolio btn"><span>PORTFOLIO</span></a>
        </div>
    </div>
  );
}

Preview.propTypes = {};

Preview.defaultProps = {};

export default Preview;
