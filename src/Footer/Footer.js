import React from 'react';

function Header() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <p className=""><b>Like what you see?</b> <br /><br /> Check out my work on GitHub, or see what I've got going on on my LinkedIn! If you'd like to talk, feel free to send me an email!</p>
        <span className="icon">
          <a href="https://github.com/MichaelInAction" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github icon"></i>
          </a>
        </span>
        <span className="icon">
          <a href="https://www.linkedin.com/in/mread15/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </span>
        <span className="icon">
          <a href="mailto:michael.read.75@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope icon"></i>
          </a>
        </span>
        <p className="small-font">Built using React.js</p>
      </div>
    </footer>
  );
}

export default Header;
