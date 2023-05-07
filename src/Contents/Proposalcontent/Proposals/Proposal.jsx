import './Proposal.css'
import { RxDotFilled } from 'react-icons/rx'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { faCheckCircle, faMessage, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Proposal = () => {
    const [upVotePopup, setUpVotePopup] = useState(false);
    const [approvePopup, setApprovePopup] = useState(false);
    const [downVotePopup, setDownVotePopup] = useState(false);
    const [approveDownPopup, setApproveDownPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    const upVote = (event) => {
        setPopupPosition({ x: event.clientX, y: event.clientY });
        setUpVotePopup(true);
    };

    const downVote = (event) => {
        setPopupPosition({ x: event.clientX, y: event.clientY });
        setDownVotePopup(true);
    };

    const handleCancelClick = () => {
        setDownVotePopup(false);
      };

    const approve = () => {
        setUpVotePopup(false);
        setApprovePopup(true);
    };

    const downApprove = () => {
        setDownVotePopup(false);
        setApproveDownPopup(true);
    };

    const handleApproveClose = () => {
        setApprovePopup(false);
    };

    const handleDownVoteApproveClose = () => {
        setApproveDownPopup(false);
    };

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
                    <a href="#" onClick={upVote}>
                        <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                    </a>
                    <a href="#" onClick={downVote}>
                        <FontAwesomeIcon className='icon' icon={faThumbsDown} />
                    </a>
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

            {/* Popups */}
            {upVotePopup && (
                <div className='popup' style={{ top: popupPosition.y, left: popupPosition.x }}>
                    <div className="upvote">
                        <p>Upvote?</p>
                        <p className='text'>By upvoting, you are in support of the proposal and you would need to approve and sign the contract.</p>
                        <button className='cancel' onClick={handleCancelClickS}>Cancel</button>
                        <button className='approve' onClick={approve}>Approve</button>
                    </div>
                </div>
            )}

            {approvePopup && (
                <div className="approve_Popup">
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                    <p>Successfully Voted, you can continue exploring</p>
                    <button className='close' onClick={handleApproveClose}>Continue</button>
                </div>
            )}

            {downVotePopup && (
                <div className='popup' style={{ top: popupPosition.y, left: popupPosition.x }}>
                    <div className="downVote">
                        <p>Downvote?</p>
                        <p className='text'>By downvoting, you are not in support of the proposal and you would need to approve and sign the contract.</p>
                        <button className='cancel' onClick={handleDownVoteClose}>Cancel</button>
                        <button className='approve' onClick={downApprove}>Approve</button>
                    </div>
                </div>
            )}

            {approveDownPopup && (
                <div className="approve_down_Popup">
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                    <p>Successfully Down voted, you can continue exploring</p>
                    <button className='close' onClick={handleDownVoteApproveClose}>Continue</button>
                </div>
            )}
        </div>
    );
};

export default Proposal;