import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { BsFillXDiamondFill } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { BiChevronDown } from 'react-icons/bi'

const MemHeader = () => {
    return (
        <div className='header'>
            <div className="header_nav_buttons" id='mem_header'>
                <FontAwesomeIcon className='icon' icon={faBell} />
                <button className='connectWallet'>Connect Wallet
                    <RxDividerVertical className='icons' id='vertical'/>
                    <BsFillXDiamondFill className='icons' />
                    <BiChevronDown className='icons' />
                </button>
            </div>
        </div>
    );
};

export default MemHeader;