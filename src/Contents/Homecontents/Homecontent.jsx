import './Homecontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsFillPatchCheckFill} from 'react-icons/bs';
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import NextPrevious from '../../Components/NextPrevious/NextPrevious'


const Homecontent = () => {
    return (
        <div className='homecontent'>
            <div className="welcome_salutation">
                <p>Good afternoon mate, Welcome to..</p>
                <h1>&#91;Username&#93; Dashboard</h1>
            </div>

            <div className="divider"></div>

            {/* Amount and Buttons (Withdraw and Deposit) */}
            <div className="verified_amount_buttons">
                <div className="verified_and_amount">
                    <p className='verified'> Verified Member
                        <BsFillPatchCheckFill className='icon'/>
                    </p>
                    <h1 className='amount'>$90,000.000</h1>
                    <p className='ethereum_amount'>3.40 ETH</p>
                </div>
                <div className="buttons">
                    <p className="button">
                        <FontAwesomeIcon className='icon' icon={faArrowCircleDown} />
                        Withdraw</p>
                    <p className="button">
                        <FontAwesomeIcon className='icon' icon={faArrowCircleUp} />
                        Deposit</p>
                </div>
            </div>

            {/* Outcome Table */}
            <div className="account_summary">
                <h2>Account Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Outcome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td className="passed" id='round'>Passed</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td className='failed' id='round'>Failed</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Ends in 5 days</td>
                            <td className='pending' id='round'>Pending</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td className='winIng' id='round'>Win</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Active</td>
                            <td className='pending' id='round'>Pending</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td className='lost' id='round'>Lost</td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td id='round'></td>
                        </tr>
                        <tr className='td_row'>
                            <td id='round'>0x7d85b...80c</td>
                            <td>Proposal</td>
                            <td>24/03/2023</td>
                            <td>Proposal by: DeGods NFT...</td>
                            <td>$23,567.00</td>
                            <td>Completed</td>
                            <td id='round'></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* Next and Previous Buttons */}
            <NextPrevious />
        </div>
    )
}

export default Homecontent