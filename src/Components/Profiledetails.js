import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../cssModules/Userprofile.module.css';
import ProfilesideBar from './profileSideBar';
import {LoginProfile} from '../Action'; 
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate} from "react-router-dom";

const Profiledetails = () => {
    const  checkLogin = useSelector(state => state.LoginUsers);
    const navigate = useNavigate();
    const  profileDetails = useSelector(state => state.LoginProfile);

    const [details, setDetails] = useState({
        _id : profileDetails._id,
        firstname: profileDetails.firstname, 
        lastname : profileDetails.lastname,
        username : profileDetails.username,
        phone :  profileDetails.phone,
        email : profileDetails.email,
        state : profileDetails.state,
        address : profileDetails.address,
        password : profileDetails.password,
        birthday: '',
        gender: ''
    } );
  
    return (
        <div> 
            <div>
            { checkLogin ? <div>
                <div className={Profile.profileContainer}>
                <div>
                    <ProfilesideBar name='profile details' />
                </div>
                <div>
                    <div  className={Profile.grid2}>
                    <div className={Profile.pageHeader}>
                        Account Details
                    </div>
                    <div className={Profile.detailsGrid}> 
                    <div className={Profile.detailsGrid1}> 
                        <div className={Profile.inputContainer}>
                        <input      
                        type='text' 
                        name="firstname"
                        value={details.firstname}
                        required
                        />
                        <label>First Name</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="username"
                         value={details.username}
                         required
                         />
                         <label>Username</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='email'
                         name="email"
                         value={details.email}
                         required
                         />
                         <label>E-mail</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="state"
                         value={details.state}
                         required
                         />
                         <label>State</label>
                        </div>

                        <div className={Profile.inputContainer}>
                       <select 
                        name="gender"
                        required
                        >
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                       </select>
                       <label>Gender</label>
                        </div>
                    </div>
                    <div className={Profile.detailsGrid2}> 
                        <div className={Profile.inputContainer}>
                        <input 
                        type='text'
                        name="lastname"
                        value={details.lastname}
                        required
                        />
                        <label>Last Name</label>
                        </div>
                        <div className={Profile.inputContainer}>
                        <input 
                        type='number'
                        name="phone"
                        value={details.phone}
                        required
                        />
                        <label>Phone Number</label>
                        </div>
                        <div className={Profile.inputContainer}>
                        <input 
                        type='date'    
                        name="birthday"
                        value={details.phone}
                        // required
                        />
                        <label>Birthday</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="address"
                         value={details.address}
                         required
                         />
                         <label>Address</label>
                        </div>

                        <div style={{width: '100%'}}>
                    <button className={Profile.saveBtn}>
                    Save details
                    </button>  
                    </div>

                    </div>
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

export default Profiledetails;