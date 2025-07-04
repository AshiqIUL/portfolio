import React from 'react'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Ashiq's Portfolio</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
