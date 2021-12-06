import React from 'react';
import PropTypes from 'prop-types';


function Preview() {
  return (
    <div className="row hero__container--preview">
        <div className="col-md-4 hero__item--preview">
          <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          <button className="hero__button--preview hero__button--preview-about btn">ABOUT</button>
        </div>
        
        <div className="col-md-4 hero__item--preview">
          <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          <button className="hero__button--preview hero__button--preview-resume btn">RESUME</button>
        </div>

        
        <div className="col-md-4 hero__item--preview">
          <img src={process.env.PUBLIC_URL + 'logo192.png'} className="hero__image--preview" alt="mountains"/>
          <button className="hero__button--preview hero__button--preview-portfolio btn">PORTFOLIO</button>
        </div>
    </div>
  );
}

Preview.propTypes = {};

Preview.defaultProps = {};

export default Preview;
