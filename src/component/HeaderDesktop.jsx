import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const HeaderDesktop = () => {
    return (
        <header className="des-header only-desktop" id="desktop-menu">
            <div className="container-fluid">
                <div className="row inner-row-header" id="box">
                    <div className="col-12 col-md-5">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="navbar-collapse header-desktop">
                                <ul className="navbar-nav dasktop-menisdf">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to work</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to Upload</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="logo-center">
                            <Link className="navbar-brandsdfd" to="/">
                                <img src="assets/images/logo/logo1.png" alt='logo' className="img-fluid" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="navbar-collapse header-desktop">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                            Resourses
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to view</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Noticed</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="nav-link" to="/home-inspection">Home inspectors</NavLink>
                                            <NavLink className="dropdown-item" to="/">Lenders</NavLink>
                                            <NavLink className="dropdown-item" to="/">Realtors</NavLink>
                                            <NavLink className="dropdown-item" to="/">Home appraisers</NavLink>
                                        </div>
                                    </li>
                                    <button type="button" className="btn-primary button-login">
                                        <span><Link to="/login">Login</Link></span>
                                        <span className="space-line">/</span>
                                        <span><Link to="/access-report">Sign Up</Link></span>
                                    </button>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default HeaderDesktop;
