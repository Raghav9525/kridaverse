import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to use Link for routing
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className='mt-2'>
            <footer
                className="page-footer font-small pt-4"
                style={{
                    background: 'linear-gradient(to right,rgb(253, 228, 249) 0%, rgb(255, 223, 246) 100%)'
                }}
            >
                <div className="container-fluid text-center text-md-left" style={{ height: "35vh" }}>
                    <div className="row">
                        {/* About */}
                        <div className="col-md-4 mt-md-0 mt-3">
                            <h5 className="">About</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        {/* Information */}
                        <div className="col-md-4 mb-md-0 mb-3">
                            <h5>Information</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
                                </li>
                            </ul>
                        </div>



                        {/* Contact */}
                        <div className="col-md-4 mb-md-0 mb-3">
                            <h5 className="">Contact</h5>
                            <p>You can add your contact information here.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
