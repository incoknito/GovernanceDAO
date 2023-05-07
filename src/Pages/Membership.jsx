import React from 'react';
import Membershipcontent from '../Contents/Membershipcontent/Membershipcontent';
import Footer from '../Components/Footer/Footer';
import MemHeader from '../Components/Header/MemHeader';

const Membership = () => {
    return (
        <div>
            <MemHeader />
            <Membershipcontent />
            <Footer />
        </div>
    );
};

export default Membership;