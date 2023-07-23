import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const HeaderMobile = () => {
    return (
        <header className="only-mobile bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="logo-center mobile-logo">
                                <Link className="navbar-brands-mobile" to="/">
                                    <img src="assets/images/logo/logo1.png" className="img-fluid" />
                                </Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <button type="button" className="btn-primary button-login">
                                    <span><Link to="/login">Login</Link></span>
                                    <span className="space-line">/</span>
                                    <span><Link to="/access-report">Sign Up</Link></span>
                                </button>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to work</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="javascript:(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to Upload</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                            Resourses
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How to view</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/inspection">Home Inspections</NavLink>
                                            <NavLink className="dropdown-item" to="/appraisal">Home Appraisal</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="javascript:(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Noticed</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="nav-link" to="/home-inspection">Home inspectors</NavLink>
                                            <NavLink className="dropdown-item" to="javascript:(0)">Lenders</NavLink>
                                            <NavLink className="dropdown-item" to="javascript:(0)">Realtors</NavLink>
                                            <NavLink className="dropdown-item" to="javascript:(0)">Home appraisers</NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default HeaderMobile;
