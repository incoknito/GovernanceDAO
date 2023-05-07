import './Proposal.css'
import { RxDotFilled } from 'react-icons/rx'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { faMessage, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Proposal = () => {
    return (
        <div>
            <div className="proposal">
                {/* Heading */}
                <div className="heading">
                    <h1>Community Grant Program</h1>
                    <div className="id_and_address">
                        <p>Proposal ID: <span>0x7d85b...80c</span></p>
                    </div>
                </div>

                {/* Proposed By */}
                <div className="proposal_by_and_name">
                    <div className="id_and_address">
                        <p>Proposal By: <span>0x7d85b...80c</span></p>
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
                </div>

                {/* Proposed Content */}
                <div className="proposed_content">
                    <p>The community grant program is a proposal to provide funding to community projects that align with the goals of our organization. The funding will be distributed to selected community projects that have a clear plan and timeline for execution, as well as a demonstrated ability to make an impact in the areas of education, environment, ... <span>see more</span></p>
                </div>

                <div className="voting_icons">
                    <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                    <FontAwesomeIcon className='icon' icon={faThumbsDown} />
                    <FontAwesomeIcon className='icon' icon={faMessage} />
                    <p>Bet</p>
                </div>

                <div className="divider"></div>

                <div className="voting_details">
                    <div className="left_side">
                        <p className='total_votes'>Total Votes <span>512 votes</span></p>
                        <RxDotFilled />
                        <p className='up_votes'>Upvotes <span>256 votes</span></p>
                        <RxDotFilled />
                        <p className='down_votes'>Downvotes <span>256 votes</span></p>
                    </div>
                    <div className="right_side">
                        <p><span>Active: </span>Ends in 5 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proposal;