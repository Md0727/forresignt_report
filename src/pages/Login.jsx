import React from 'react';
import LoginContent from '../component/content/LoginContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const Login = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <LoginContent />
            <Footer />
        </div>
    );
}

export default Login;
