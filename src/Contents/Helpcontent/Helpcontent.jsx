import { faChevronDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Helpcontent.css'

const Helpcontent = () => {
    return (
        <div>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <p>If you can't find an answer to your question in our FAQ section, you can always reach out to our support team for further assistance.</p>

                <h4>How do I become a member?</h4>
                <p>To place a bet, navigate to the bet marketplace and select the bet you want to participate in. Then, select the outcome you believe will happen and enter the amount you want to bet. Once you're ready, click "Place Bet" and confirm your bet details.</p>

                <div className="divider"></div>
                <h4>How do I make a proposal or place a bet?</h4>
                <div className="divider"></div>
                <h4>What are the fees for using this platform?</h4>
                <div className="divider"></div>
                <h4>How do I withdraw my funds?</h4>
                <div className="divider"></div>
                <h4>How do I connect my wallet?</h4>
                <div className="divider"></div>
                <h4>How are the odds for the bests calculated?</h4>
                <div className="divider"></div>
                <h4>Is my personal information secure on this platform?</h4>
                <div className="divider"></div>
            </div>
            <div className="contact">
                <p>Contact the team</p>
                <FontAwesomeIcon className='icon' icon={faChevronDown}/>
            </div>

            <div className="message">
                <FontAwesomeIcon className='icon' icon={faMessage} />
            </div>
        </div>
    );
};

export default Helpcontent;