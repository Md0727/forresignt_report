import React from 'react';
import SignUpContent from '../component/content/SignUpContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const SignUp = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <SignUpContent />
            <Footer />
        </div>
    );
}

export default SignUp;
