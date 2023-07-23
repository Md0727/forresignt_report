import React from 'react';
import { Link } from 'react-router-dom';

const AccessReportContent = () => {
    return (
        <section className="login-form-outer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="left-and-button mb-3">
                            <Link to="/sign-up" className="buto-report-upload">
                                <span className="fa fa-user" />
                                <span className="i-want-towork">I want to Upload Report</span>
                                <span className="fa fa-long-arrow-right arrow-btn" />
                            </Link>
                        </div>
                        <div className="left-and-button">
                            <Link to="/login" className="buto-report-upload">
                                <span className="fa fa-user" />
                                <span className="i-want-towork">I want to Access Report</span>
                                <span className="fa fa-long-arrow-right arrow-btn" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AccessReportContent;

