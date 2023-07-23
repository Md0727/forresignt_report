import React from 'react';
import HomeInspectionContent from '../component/content/HomeInspectionContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const HomeInspection = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <HomeInspectionContent />
            <Footer />
        </div>
    );
}

export default HomeInspection;
