import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../cssModules/ProfilesideBar.module.css';
import {Link} from 'react-router-dom';


const ProfileSideBar = ({name}) => {
    return(
        <div> 
            <div className={Profile.grid1}>
                    <Link to ="/profile"
                    style={{color: 'black', textDecoration: 'none'}}
                    >
                    <div
                    className={name === 'my account' ? Profile.greyBackground : Profile.nothing}
                    >
                    <img src="https://img.icons8.com/ios/18/000000/user--v1.png" alt="user"/> 
                    <span>My Account</span>
                    </div>
                    </Link>
                    <div>
                    <img src="https://img.icons8.com/ios/18/000000/mail.png" alt="inbox"/>
                    <span>Inbox</span>
                    </div>
                    <div>
                    <img src="https://img.icons8.com/ios/18/000000/fast-moving-consumer-goods.png" alt="order"/>
                    <span>Orders</span>
                    </div>
                    <div>
                    <img src="https://img.icons8.com/ios/18/000000/heart-with-arrow--v2.png" alt="saved items"/>
                    <span>Saved Items</span>
                    </div>
                    <Link to ="/profile/details"
                    style={{color: 'black', textDecoration: 'none'}}
                    >
                    <div
                     className={name === 'profile details' ? Profile.greyBackground : Profile.nothing}
                    >
                    <img src="https://img.icons8.com/ios/18/000000/business-contact.png" alt="profile details"/>
                    <span>Account details</span>
                    </div>
                    </Link>
                    {/* <div>
                    <img src="https://img.icons8.com/ios/18/000000/zip-code.png" alt="address"/>    
                    <span>Address Book</span>
                    </div> */}
                    <Link 
                    to ="/profile/change_password" 
                    style={{color: 'black', textDecoration: 'none'
                    }}>
                    <div
                    className={name === 'change_password' ? Profile.greyBackground : Profile.nothing}
                    >
                    <img src="https://img.icons8.com/ios/18/000000/password--v1.png" alt="change password"/>    
                    <span>Change Password</span>
                    </div>
                    </Link>
                    <Link 
                    to ="/profile/newsletter"
                    style={{color: 'black', textDecoration: 'none'}}
                    >
                    <div
                     className={name === 'newsletter' ? Profile.greyBackground : Profile.nothing}
                    >
                    <img src="https://img.icons8.com/ios/18/000000/news.png" alt="newsfeed"/>
                    <span>Newsletter Preference</span>
                    </div>
                    </Link>
                    <div>
                    <img src="https://img.icons8.com/ios/18/000000/reboot.png" alt="recently viewed"/>
                    <span>Recently viewed</span>
                    </div>
                    <div style={{textAlign: "center", padding: "5% 0"}}>
                    <img src="https://img.icons8.com/ios/18/000000/shutdown--v1.png" alt="logout"/>
                    <span style={{color: "red", marginLeft: '2%'}}>Log out</span>
                    </div>

                </div>
        </div>
    )
}

export default ProfileSideBar;