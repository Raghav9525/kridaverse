import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure this is correctly importing your CSS file

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeMenu = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid m-0 p-0">
                    <div className='col-sm-2 mt-2'>
                        <Link className="navbar-brand" to="/">
                            <img src={require("../img/logo.png")} className="float-end" style={{ width: "150px", height: "80px" }} alt="logo" />
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse stylish-menu" + (isNavOpen ? " show" : "")} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li  className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
                            </li>
                            <li  className="nav-item">
                                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/application" onClick={closeMenu}>Application</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>Page4</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>Page5</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>Page6</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeMenu}>Page7</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
