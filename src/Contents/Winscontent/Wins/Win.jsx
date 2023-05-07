import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Win.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Win = () => {
    return (
        <div>
            <div className="win">
                <div className="header">
                    <h1>Community Grant Program</h1>
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                </div>
                <div className="section_two">
                    <p className='proposed'>Proposed By: <span>0x7d85b...80c</span></p>
                    <p className='Win_id'>Win ID: <span>0x7d85b...80c</span></p>
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

                <div className="divider"></div>

                <div className="see_more">
                    <div className="see">
                        <p>See winning members</p>
                        <FontAwesomeIcon className='icon' icon={faChevronRight} />
                    </div>
                    <div className="closed">
                        <p>Closed: <span>5 days ago</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Win;