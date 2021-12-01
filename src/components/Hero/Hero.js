import React from 'react';
import PropTypes from 'prop-types';


const Hero = () => (
  <div className="hero" data-testid="Hero">
    <div className="hero__container--left">
      left
    </div>
    <div className="hero__container--right">
      right
    </div>
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
