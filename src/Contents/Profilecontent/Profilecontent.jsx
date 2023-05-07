import './Profilecontent.css'

const Profilecontent = () => {
    return (
        <div className='profilecontent'>
            <div className="profileheader">
                <p>Profile</p>
                <button>Edit profile</button>
            </div>
            <div className="profile_picture">
                <img src="profile.png" alt="Profile" />
            </div>
            <p className='head'>Account</p>
            <div className="divider"></div>
            <div className="user_details">
                <div className="username">
                    <p>Username</p>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="email_address">
                    <p>Email address</p>
                    <p>loremipsum@gmail.com</p>
                </div>
            </div>

            <p className='head'>Security</p>
            <div className="divider"></div>
            <div className="security">
                <div className="username">
                    <p>Password</p>
                    <p>**********</p>
                </div>
                <div className="email_address">
                    <p>Two-factor Authentication</p>
                    <p>off</p>
                </div>
                <div className="devices">
                    <p>Devices and Sessions</p>
                    <p>View login history</p>
                </div>
            </div>

            <p className='head'>Notification</p>
            <div className="divider"></div>
            <div className="notification">
                <p>Preference</p>
                <p>Push & Email notification</p>
            </div>
        </div>
    );
};

export default Profilecontent;