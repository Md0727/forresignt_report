import React from 'react';
import { Link } from 'react-router-dom';

const HomeInspectionContent = () => {
    return (
        <>
            <section className="home-inspector-sdfd">
                <div className="container">
                    <div className="multipleimage">
                        <img src="assets/images/logo/home-01.png" className="images-one" />
                        <img src="assets/images/logo/home-02.png" className="images-two" />
                        <img src="assets/images/logo/home-03.png" className="images-three" />
                        <img src="assets/images/logo/home-04.png" className="images-four" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="banner-title-cn">
                                <h2 className="c-section__title">Get Noticed</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link to="/sign-up" className="registerBtnTwo">Registration <span className="fa fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-ins">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="video-block">
                                <div className="video-image">
                                    <div className="img-overlay" id="img-overlay" video-target />
                                    <video className="video-ouer-sd" id="video">
                                        <source src="assets/video/video.mp4" type="video/mp4" />
                                    </video>
                                    <Link to="javascript:(0)" className="play-btn" id="playVid">
                                        <i className="fa fa-play" id="IconPlay" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>


    );
}

export default HomeInspectionContent;

