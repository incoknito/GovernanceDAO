import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Bet.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Bet = () => {
    return (
        <div>
            <div className="bet">
                <h1>Community Grant Program</h1>
                <div className="section_two">
                    <p className='proposed'>Proposed By: <span>0x7d85b...80c</span></p>
                    <p className='bet_id'>Bet ID: <span>0x7d85b...80c</span></p>
                </div>
                <div className="name_and_picture">
                    <div className='picture'>
                        <img src="profile.png" alt="Profile" />
                    </div>
                    <p>Mohammed Joshua</p>
                </div>
                <div className="verified_member">
                    <p>Verified member</p>
                    <BsFillPatchCheckFill className='icon' />
                </div>

                <div className="odds_and_buttons">
                    <div className="odds">
                        <p>No 30 odds</p>
                        <p>Yes 70 0dds</p>
                    </div>

                    <p className='bet_no'>Bet No</p>
                    <p className='bet_yes'>Bet Yes</p>
                </div>

                <div className="divider"></div>

                <div className="see_more">
                    <p>See more details</p>
                    <FontAwesomeIcon className='icon' icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default Bet;