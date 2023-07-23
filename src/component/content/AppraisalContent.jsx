import React from 'react';
import { Link } from 'react-router-dom';

const AppraisalContent = () => {
    return (
        <section className="main-content">
            <div className="container">
                <br />
                <br />
                <div className="box">
                    <div className="row align-center">
                        <div className="col-12 col-md-6">
                            <p className="uppercase mb-1 coor-dfsd">Sub Section</p>
                            <h1 className="display-5 font-weight-bold">Video Inspection</h1>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nulla voluptatibus sed ex repudiandae animi numquam adipisci omnis doloribus veniam, consectetur accusantium suscipit sint, dolorem nostrum nihil! Commodi, quos odio?</p>
                            <Link to="javascript:(0)" className="Read-More">Read more</Link>
                        </div>
                        <div className="col-12 col-md-6">
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
            </div>
        </section>


    );
}

export default AppraisalContent;

