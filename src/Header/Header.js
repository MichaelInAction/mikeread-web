import animateScrollTo from 'animated-scroll-to';
import logo from '../logo.svg';
import React from 'react';

function Header(props) {
  const dropdownItems = props.dropdown.map((element) =>
    (<button className="dropdown-item btn btn-link" onClick={() => animateScrollTo(document.querySelector(element.link).offsetTop - 60)} key={element.link}>{element.text}</button>)
  );
  return (
    <nav className="upper navbar sticky-top navbar-light bg-light">
      <span className="navbar-brand">
        <img src={logo} width="30" height="30" className="d-inline-block align-top profilePicture" alt=""></img>
        Michael Read
      </span>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={() => {props.setPage('landing'); animateScrollTo(0);}}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={() => {props.setPage('projects'); animateScrollTo(0);}}>Projects</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={() => {props.setPage('personal'); animateScrollTo(0);}}>Personal</button>
        </li>
        <li className="nav-item">
          <div className="dropdown dropleft">
            <button className="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {dropdownItems}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
