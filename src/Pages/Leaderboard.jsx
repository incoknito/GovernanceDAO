import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Leaderboardcontent from '../Contents/Leaderboard/Leaderboardcontent';

const Leaderboard = () => {
    return (
        <div>
            <Header />
            <Leaderboardcontent/>
            <Footer />
        </div>
    );
};

export default Leaderboard;