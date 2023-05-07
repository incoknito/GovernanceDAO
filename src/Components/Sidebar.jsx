import React from 'react';
import { TbHome2 } from "react-icons/tb"
import { FaVoteYea, FaMedal, FaAddressCard } from "react-icons/fa"
import { SiBetfair } from "react-icons/si"
import { MdLeaderboard } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { GiHelp } from "react-icons/gi"
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const sidebarMenu = [
        {
            path: "/",
            name: "Home",
            icon: <TbHome2 />
        },
        {
            path: "/proposal",
            name: "Proposal",
            icon: <FaVoteYea />
        },
        {
            path: "/bets",
            name: "Bets",
            icon: <SiBetfair />
        },
        {
            path: "/wins",
            name: "Wins",
            icon: <FaMedal />
        },
        {
            path: "/leaderboard",
            name: "Leaderboard",
            icon: <MdLeaderboard />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />
        },
        {
            path: "/help",
            name: "Help",
            icon: <GiHelp />
        },
        {
            path: "/membership",
            name: "Membership",
            icon: <FaAddressCard />
        }
    ]
    return (
        <div className='container'>
            <div className="sidebar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                {
                    sidebarMenu.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_name">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;