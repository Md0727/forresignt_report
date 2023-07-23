import React from 'react';
import AccessReportContent from '../component/content/AccessReportContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const AccessReport = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <AccessReportContent />
            <Footer />
        </div>
    );
}

export default AccessReport;
