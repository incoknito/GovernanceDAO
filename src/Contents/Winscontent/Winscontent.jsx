import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Winscontent.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from 'react-icons/bi'
import NextPrevious from '../../Components/NextPrevious/NextPrevious';
import Win from './Wins/Win';

const Winscontent = () => {
    return (
        <div>
            <div className="welcome_header">
                <p>Mate,</p>
                <h3>Explore winning Proposals</h3>
                <div className="section_two">
                    <div className="search_and_sort">
                        <div className="search_bar">
                            <BiSearch className='icon' />
                            <input type="text" />
                        </div>

                        <div className="sort">
                            <p>Sort by: |</p>
                            <p className="latest">Voted proposals</p>
                            <FontAwesomeIcon className='icon' icon={faChevronDown} />
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="winings">
                    <Win />
                    <Win />
                    <Win />
                    <Win />
                </div>
                <NextPrevious />
            </div>
        </div>
    );
};

export default Winscontent;