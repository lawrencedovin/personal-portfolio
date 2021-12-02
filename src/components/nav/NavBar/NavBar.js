import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"


function NavBar() {
  return (
    <div data-testid="NavBar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link className="navbar-brand navbar__logo" to="/">
            {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" /> */}
            <img src={process.env.PUBLIC_URL + 'icons/portfolio-icon.svg'} className="navbar__icon--portfolio" alt="profile logo"/>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="d-flex">
                <ul class="navbar-nav me-2">
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/resume">Resume</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link navbar__link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div class="me-auto"></div>
            <div class="d-flex">
                <ul class="navbar-nav me-2">
                    <li class="nav-item navbar__social-container">
                      <a className="nav-link navbar__social" href="https://www.linkedin.com/in/lawrence-dovin/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                      </a>
                    </li>
                    <li class="nav-item navbar__social-container">
                      <a className="nav-link navbar__social" href="https://github.com/lawrencedovin/" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={['fab', 'github-alt']} />
                      </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
