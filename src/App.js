import React from 'react';
import './App.css';
// import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Proposal from './Pages/Proposal.jsx';
import Bets from './Pages/Bets.jsx';
import Wins from './Pages/Wins.jsx';
import Leaderboard from './Pages/Leaderboard.jsx';
import Profile from './Pages/Profile.jsx';
import Help from './Pages/Help.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Membership from './Pages/Membership';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/proposal' element={<Proposal />} />
            <Route path='/bets' element={<Bets />} />
            <Route path='/wins' element={<Wins />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/help' element={<Help />} />
            <Route path='/membership' element={<Membership />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;