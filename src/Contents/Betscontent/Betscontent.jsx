import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Betscontent.css'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from 'react-icons/bi'
import NextPrevious from '../../Components/NextPrevious/NextPrevious';
import Bet from './Bets/Bet';

const Betscontent = () => {
    return (
        <div>
            <div className="welcome_header">
                <p>Mate,</p>
                <h3>Explore Bets</h3>
                <div className="section_two">
                    <div className="search_and_sort">
                        <div className="search_bar">
                            <BiSearch className='icon' />
                            <input type="text" />
                        </div>

                        <div className="sort">
                            <p>Sort by: |</p>
                            <p className="latest">Latest</p>
                            <FontAwesomeIcon className='icon' icon={faChevronDown} />
                        </div>
                    </div>

                    <div className="see_history">
                        <p>See bets history</p>
                        <FontAwesomeIcon className='icon' icon={faChevronRight} />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="bet_contents">
                    <Bet />
                    <Bet />
                    <Bet />
                    <Bet />
                </div>
                <NextPrevious />
            </div>
        </div>
    );
};

export default Betscontent;