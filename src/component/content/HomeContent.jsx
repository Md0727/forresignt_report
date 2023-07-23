import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <div className="banner-video">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-2 padding-right">
                        <div className="advitisment-outer">
                            <div className="profileImage">
                                <img src="assets/images/advertisment/profile.png" className="img-fluid" alt="bannerLeft" />
                            </div>
                            <div className="profile-content">
                                <h1>Rose Parker</h1>
                                <p>Concrete</p>
                                <address className="profile-addresss">
                                    <ul className="list-of-address">
                                        <li>
                                            <span className="mobile-ttile">Mobile : </span>
                                            <span className="mobile-ttile">
                                                <Link to="javascript:void(0);" className="number-mobile">9354824120</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="mobile-ttile">Email : </span>
                                            <span className="mobile-ttile">
                                                <Link to="javascript:void(0);" className="number-mobile">example@gmail.com</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="mobile-ttile">Address : </span>
                                            <span className="mobile-ttile">
                                                55 Rossmore Rd, New York, USA
                                            </span>
                                        </li>
                                    </ul>
                                </address>
                                <ul className="social-media">
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-chrome" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-youtube-play" aria-hidden="true" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="video-outer">
                            <video className="video-inner" autoPlay muted plays-inline loop>
                                <source src="assets/video/video.mp4" type="video/mp4" />
                            </video>
                            <div className="overlayDiv">
                                <h1>How it work</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-2 padding-left">
                        <div className="advitisment-outer">
                            <div className="profileImage">
                                <img src="assets/images/advertisment/profile.png" className="img-fluid" alt="bannerLeft" />
                            </div>
                            <div className="profile-content">
                                <h1>Rose Parker</h1>
                                <p>Concrete</p>
                                <address className="profile-addresss">
                                    <ul className="list-of-address">
                                        <li>
                                            <span className="mobile-ttile">Mobile : </span>
                                            <span className="mobile-ttile">
                                                <Link to="javascript:void(0);" className="number-mobile">9354824120</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="mobile-ttile">Email : </span>
                                            <span className="mobile-ttile">
                                                <Link to="javascript:void(0);" className="number-mobile">example@gmail.com</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="mobile-ttile">Address : </span>
                                            <span className="mobile-ttile">
                                                55 Rossmore Rd, New York, USA
                                            </span>
                                        </li>
                                    </ul>
                                </address>
                                <ul className="social-media">
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-chrome" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:(0)"><i className="fa fa-youtube-play" aria-hidden="true" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeContent;

