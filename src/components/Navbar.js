import React from 'react'
import { Link } from 'react-scroll';
import './navbar.css';
function Navbar() {
  return (
    <header className='hello'>
    <nav className="navbar navbar-expand-lg nav-custom">
        <div className="container-fluid">
            <Link className="navbar-brand" to="home" smooth={true} duration={500}>
            Adrika Dwivedi
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <svg className="navbar-toggler-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="white" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22" />
                </svg>
            </button>
            <div  className=" collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="project" smooth={true} duration={500}>Projects</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar
