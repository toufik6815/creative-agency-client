import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {

    return (
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link className='mt-3 ' to='/'><img src={logo} alt=""/></Link>
        
        <button className="navbar-toggler mt-3 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link mr-3 text-center" to="/">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-3 text-center" to="/dashboard">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-3 text-center" to="#">
                        Our Portfolio
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-3 text-center" to="#">
                        Our Team
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-3 text-center" to="#">
                        Contact Us
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="mr-5 btn btn-brand">
                        <button className='button'>Login</button>
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    );
};

export default Navbar;