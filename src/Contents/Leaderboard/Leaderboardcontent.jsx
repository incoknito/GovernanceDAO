import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Leaderboardcontent.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from 'react-icons/bi'
import NextPrevious from '../../Components/NextPrevious/NextPrevious';

const Leaderboardcontent = () => {
    return (
        <div>
            <div className="welcome_header">
                <p>Mate,</p>
                <h3>Leaderboard</h3>
                <div className="section_two">
                    <div className="search_and_sort">
                        <div className="search_bar">
                            <BiSearch className='icon' />
                            <input type="text" />
                        </div>

                        <div className="sort">
                            <p>Sort by: |</p>
                            <p className="latest">Total Bets</p>
                            <FontAwesomeIcon className='icon' icon={faChevronDown} />
                        </div>
                    </div>

                </div>

                <div className="divider"></div>

                <p className='header_content'>The leaderboard shows the top performers in various categories. It's a great way to track your progress and see how you measure up against the competition. Check back frequently to see if you've made it to the top of the leaderboard!</p>

                <div className="leaderboard_table">
                    <table>
                        <thead>
                            <tr>
                                <th>Ranking</th>
                                <th>User</th>
                                <th>Total Bets</th>
                                <th>Total Tokens</th>
                                <th>Total Votes</th>
                                <th>Total Wins</th>
                                <th>Total Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='td_row'>
                                <td className='round'>1</td>
                                <td>Mohammed Zuri</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>2</td>
                                <td>Anthony Brooks</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>3</td>
                                <td>Mohammed Zuri</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>4</td>
                                <td>Anthony Brooks</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>5</td>
                                <td>Mohammed Zuri</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>6</td>
                                <td>Anthony Brooks</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>7</td>
                                <td>Mohammed Zuri</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>8</td>
                                <td>Anthony Brooks</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>9</td>
                                <td>Mohammed Zuri</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                            <tr className='td_row'>
                                <td className='round'>10</td>
                                <td>Anthony Brooks</td>
                                <td>12</td>
                                <td>$23,000.00</td>
                                <td>23</td>
                                <td>18</td>
                                <td className='round'>11</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <NextPrevious />
            </div>
        </div>
    );
};

export default Leaderboardcontent