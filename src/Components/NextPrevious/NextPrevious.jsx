import './NextPrevious.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NextPrevious = () => {
    return (
        <div>
            {/* Next and Previous Buttons */}
            <div className="next_and_previous">
                <div className="rows_per_page">
                    <p>Rows per page</p>
                    <div></div>
                    <p className="number">10</p>
                    <FontAwesomeIcon className='icon' icon={faChevronDown} />
                </div>
                <div className="page_number">
                    <p>Page 1-10</p>
                    <p>of</p>
                    <p>100</p>
                </div>
                <FontAwesomeIcon className='iconNP' icon={faChevronLeft} />
                <FontAwesomeIcon className='iconNP' icon={faChevronRight} />
            </div>
        </div>
    );
};

export default NextPrevious;