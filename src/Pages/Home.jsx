import React from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Homecontent from '../Contents/Homecontents/Homecontent';

const Home = () => {
    return (
        <div>
            <Header />
            <Homecontent />
            <Footer />
        </div>
    );
};

export default Home;