import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <div className='header'>
            <div className="header_nav_buttons">
                <FontAwesomeIcon className='icon' icon={faBell} />
                <FontAwesomeIcon className='icon' icon={faPlus} />
                <button className='connectWallet'>Connect Wallet</button>
            </div>
        </div>
    )
}

export default Header