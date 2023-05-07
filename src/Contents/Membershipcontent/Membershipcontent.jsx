import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Membershipcontent.css'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { RiInformationLine } from 'react-icons/ri'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Membershipcontent = () => {
    return (
        <div>
            <div className="membership">
                <div className="membership_header">
                    <h2>Membership</h2>
                    <button>View on explorer</button>
                </div>
                <FontAwesomeIcon className='profile_user' icon={faCircleUser} />
                <div className="member_details_buy">
                    <div className="member_details">
                        <div>
                            <p>Name:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Membership ID:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Bio:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Gained membership:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Last renewal:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Expires:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Contract Address:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Token standard:</p>
                            <p>xxxxxxxx</p>
                        </div>
                        <div>
                            <p>Network:</p>
                            <p>xxxxxxxx</p>
                        </div>
                    </div>
                    <div className="buy_nft">
                        <h4>Become a member of our community</h4>
                        <p>Click on the button below to own a membership NFT to become a mmember today.</p>
                        <button>Buy NFT</button>
                    </div>
                </div>

                <div className="divider"></div>
                <div className="members_footer">
                    <div>
                        <p>Need more explanation on membership</p>
                        <RiInformationLine className='icon' />
                    </div>
                    <div>
                        <p>Proceed to dashboard</p>
                        <FontAwesomeIcon className='icon' icon={faChevronRight} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Membershipcontent;