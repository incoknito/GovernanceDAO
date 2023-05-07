import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="divider"></div>
            <div className="footer_details">
            <div className="logo_and_socials">

            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="socials">
                <FontAwesomeIcon className='icon' icon={faGithub} />
                <FontAwesomeIcon className='icon' icon={faTelegram} />
                <FontAwesomeIcon className='icon' icon={faDiscord} />
                <FontAwesomeIcon className='icon' icon={faTwitter} />
            </div>
            </div>
            <div className="footer_links">
            <div className="links">
                <h2>Contact</h2>
                <h2>FAQ</h2>
            </div>
            <div className="links">
                <h2>Resources</h2>
                <h2>Whitepaper</h2>
            </div>
            <div className="links">
                <h2>Terms of use</h2>
                <h2>Privacy Policy</h2>
                <h2>Legal Disclaimer</h2>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer