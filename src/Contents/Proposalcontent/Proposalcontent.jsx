import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Proposalcontent.css'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from 'react-icons/bi'
import Proposals from './Proposals/Proposal';
import NextPrevious from '../../Components/NextPrevious/NextPrevious';

const Proposalcontent = () => {
    return (
        <div>
            <div className="welcome_header">
                <p>Mate,</p>
                <h3>Explore Proposals</h3>
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
                        <p>See proposal history</p>
                        <FontAwesomeIcon className='icon' icon={faChevronRight} />
                    </div>
                </div>

                <div className="divider"></div>

                <Proposals/>
                <Proposals/>
                <Proposals/>
                <NextPrevious />
            </div>
        </div>
    );
};

export default Proposalcontent;