import React from 'react';
import { Link } from 'react-router-dom';

const InspectionContent = () => {
    return (
        <>
            <section className="inspector-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-3">
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
                        <div className="col-12 col-md-9">
                            <div className="inspection-content">
                                <h1> Certified Home Inspection in Alabama </h1>
                                <p>
                                    Inspectors are listed in no particular order. If you are looking to hire a home inspector, you canfind a home inspector near the property you need to have inspected.
                                </p>
                                <p className="font-semibold leading-tight text-gray-400 showing-result">
                                    Showing page <strong>1</strong> of <a href="javascript:void(0);" className="total-three">3 total pages</a>.
                                </p>
                            </div>
                            <div className="table-list">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-top-0">Member</th>
                                                <th className="text-center">Servicing</th>
                                                <th className="text-center">Phone</th>
                                                <th className="text-center">Phone1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    <a href="#" className="no-underline group Huntsville1">
                                                        <div className="david-mcbride"> David McBride </div>
                                                        <div className="home-inspection-s"> McNeese Home Inspections </div>
                                                    </a>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">Huntsville</div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">(256) 337-0877</div>
                                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0);" className="edit-profile Huntsville">
                                                        <span className="fa fa-user" />
                                                        <span className="fa fa-angle-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <a href="#" className="no-underline group Huntsville1">
                                                        <div className="david-mcbride"> David McBride </div>
                                                        <div className="home-inspection-s"> McNeese Home Inspections </div>
                                                    </a>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">Huntsville</div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">(256) 337-0877</div>
                                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0);" className="edit-profile Huntsville">
                                                        <span className="fa fa-user" />
                                                        <span className="fa fa-angle-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <a href="#" className="no-underline group Huntsville1">
                                                        <div className="david-mcbride"> David McBride </div>
                                                        <div className="home-inspection-s"> McNeese Home Inspections </div>
                                                    </a>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">Huntsville</div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="Huntsville">(256) 337-0877</div>
                                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0);" className="edit-profile Huntsville">
                                                        <span className="fa fa-user" />
                                                        <span className="fa fa-angle-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>


    );
}

export default InspectionContent;

