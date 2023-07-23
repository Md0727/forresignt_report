import React from 'react';
import AppraisalContent from '../component/content/AppraisalContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const Appraisal = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <AppraisalContent />
            <Footer />
        </div>
    );
}

export default Appraisal;
