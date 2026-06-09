import React from 'react'

const Footer = () => (
  <footer className="no-print">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links no-print">
          <li>
            <a href="https://www.facebook.com/nello1997">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+393457086780">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Nek97">
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/devnek97/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nek97/">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>© Copyright 2020 Tortora Aniello</li>
          <li>
            Realized by <a title="Styleshout" href="https://github.com/Nek97">Tortora Aniello</a>
          </li>
        </ul>
      </div>
      <div id="go-top" className="no-print">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
