import React from 'react';
import HomeContent from '../component/content/HomeContent';
import Footer from '../component/Footer';
import HeaderDesktop from '../component/HeaderDesktop';
import HeaderMobile from '../component/HeaderMobile';

const Home = () => {
    return (
        <div className='wrapper-content'>
            <HeaderDesktop />
            <HeaderMobile />
            <HomeContent />
            <Footer />
        </div>
    );
}

export default Home;
