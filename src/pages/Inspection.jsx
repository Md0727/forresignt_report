import React from 'react';
import InspectionContent from '../component/content/InspectionContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const Inspection = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <InspectionContent />
            <Footer />
        </div>
    );
}

export default Inspection;
