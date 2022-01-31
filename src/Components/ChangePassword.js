import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../cssModules/Userprofile.module.css';
import ProfilesideBar from './profileSideBar';
// import {LoginProfile} from '../Action'; 
import { useSelector} from 'react-redux';
import { useNavigate} from "react-router-dom";

const ChangePassword = () => {
    const  checkLogin = useSelector(state => state.LoginUsers);
    const navigate = useNavigate();
    // const  profileDetails = useSelector(state => state.LoginProfile);

    // const [details, setDetails] = useState({
    //     _id : profileDetails._id,
    //     firstname: profileDetails.firstname, 
    //     lastname : profileDetails.lastname,
    //     username : profileDetails.username,
    //     phone :  profileDetails.phone,
    //     email : profileDetails.email,
    //     state : profileDetails.state,
    //     address : profileDetails.address,
    //     password : profileDetails.password,
    //     birthday: '',
    //     gender: ''
    // } );
  
    return (
        <div> 
            <div>
            { checkLogin ? <div>
                <div className={Profile.profileContainer}>
                <div>
                    <ProfilesideBar name='change_password' />
                </div>
                <div>
                    <div  className={Profile.grid2}>
                    <div className={Profile.pageHeader}>
                        Change Password
                    </div>
                    <div className={Profile.detailsGrid}> 
                    <div className={Profile.detailsGrid1}> 
                    <div className={Profile.inputContainer}>
                        <input
                         type='password'
                         name="old_password"
                         required
                         />
                         <label>Old Password</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='password'
                         name="new_password"
                         required
                         />
                         <label>New Password</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='password'
                         name="confirm_password"
                         required
                         />
                         <label>Confirm New Password</label>
                        </div>

                        <div style={{width: '100%'}}>
                        <button className={Profile.saveBtn}>
                        Submit
                        </button>  
                    </div>
                    </div>
                    </div>
                    <div className={Profile.detailsGrid2}> 
                    </div>
                    </div>
                </div>


                </div>
                </div>
                : <div className="notLoggedIn">
                    <span>Please Proceed to 
                    <i onClick={()=> navigate('/auth')} style={{color : 'orange'}}>
                    Login
                    </i>
                     Page 
                     </span>
            </div>
            }
        </div>
        </div>
    )
}

export default ChangePassword;