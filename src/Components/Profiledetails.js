import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../cssModules/Userprofile.module.css';
import ProfilesideBar from './profileSideBar';
import {LoginProfile} from '../Action'; 
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate} from "react-router-dom";
import axios from 'axios';


const Profiledetails = () => {
    const  checkLogin = useSelector(state => state.LoginUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const  profileDetails = useSelector(state => state.LoginProfile);
    const [Ferror, setFerror] = useState('');
    const [Lerror, setLerror] = useState('');
    const [Uerror, setUerror] = useState('');
    const [Perror, setPerror] = useState('');
    const [Eerror, setEerror] = useState('');
    const [Aerror, setAerror] = useState('');
    const [Serror, setSerror] = useState('');

    const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    const userRegex = /^[a-z]+[0-9]*/i;
    const stateRegex = /^[a-z]+/i
    const addressRegex = /[0-9]*[a-z]+/i;
    const phoneRegex = /((^090)(\d{8}))|((^070)(\d{8}))|((^080)(\d{8}))|((^081)(\d{8})|((^091)(\d{8})))/i;


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
        gender: 'Male'
    });

    const onChangeInput = (e) => {    
        let inputValue = e.target.value;
        let name = e.target.name;
        setDetails({
            ...details,
            [name] : inputValue
        });       
    }

    //function to fill out errors for empty strings.
    const emptyInputError = (name, setError) => {
        if(name=== ''){
            setError('field required')
        }
    }

    const onClickSubmitBtn = () => {
        setEerror('')
        setFerror('')
        setUerror('')
        setPerror('')
        setSerror('')
        setLerror('')

        const {_id,firstname,lastname,username,phone,email,state,address} = details;

        const testFirstname = nameRegex.test(firstname);
        const testLastname = nameRegex.test(lastname);
        const testUsername = userRegex.test(username);
        const testPhone = phoneRegex.test(phone);
        const testState = stateRegex.test(state);
        const testAddress = addressRegex.test(address);
        const testEmail = emailRegex.test(email);

        if(!_id || !firstname || !lastname || !username || !phone || !email || !state || !address){
            
            emptyInputError(firstname, setFerror)
            emptyInputError(lastname, setLerror)
            emptyInputError(username, setUerror)
            emptyInputError(phone, setPerror)
            emptyInputError(email, setEerror)
            emptyInputError(state, setSerror)
            emptyInputError(address, setAerror)
            return;
    }

    if(!testFirstname || !testLastname || !testUsername || !testPhone || !testState || !testAddress ||
         !testEmail || username.length > 7 || username.length < 3 || phone.length !== 11){

            if(!nameRegex.test(firstname)){
                setFerror('incorrect fullname')    
            }
        
            if(!nameRegex.test(lastname)){
                setLerror('incorrect lastname')
            }
        
            if(!userRegex.test(username) || username.length > 7 || username.length < 3){
                setUerror('username should be greater than 3 and less than 8 characters')
            }
        
            if(!stateRegex.test(state)){
                setSerror('incorrect state name')
            }
        
            if(!addressRegex.test(address)){
                setAerror('incorrect address')
            }
        
             if(!emailRegex.test(email)){
                setEerror('incorrect email')
            }
        
            if(!phoneRegex.test(phone) || phone.length !== 11){
                setPerror('incorrect phone number')
            }
        }
        else{       
            axios.put('https://protected-retreat-10926.herokuapp.com/apis/updatesignup', details )
            .then(
                (res) => {
                    dispatch(LoginProfile(details));
                    // setMessage(res.data.message);
                    alert(res.data.message);
                }
            ) 
    }    
}

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
                        onChange={onChangeInput}

                        required
                        />
                        <label>First Name</label>
                        <span className={Profile.error}>{Ferror}</span>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="username"
                         value={details.username}
                         onChange={onChangeInput}
                         required
                         />
                         <label>Username</label>
                         <span className={Profile.error}>{Uerror}</span>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='email'
                         name="email"
                         value={details.email}
                         onChange={onChangeInput}
                         required
                         />
                         <label>E-mail</label>
                         <span className={Profile.error}>{Eerror}</span>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="state"
                         value={details.state}
                         onChange={onChangeInput}
                         required
                         />
                         <label>State</label>
                         <span className={Profile.error}>{Serror}</span>
                        </div>

                        <div className={Profile.inputContainer}>
                       <select 
                        name="gender"
                        value = {details.gender}
                        onChange={onChangeInput}
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
                        onChange={onChangeInput}
                        required
                        />
                        <label>Last Name</label>
                        <span className={Profile.error}>{Lerror}</span>
                        </div>
                        <div className={Profile.inputContainer}>
                        <input 
                        type='number'
                        name="phone"
                        value={details.phone}
                        onChange={onChangeInput}
                        required
                        />
                        <label>Phone Number</label>
                        <span className={Profile.error}>{Perror}</span>
                        </div>
                        <div className={Profile.inputContainer}>
                        <input 
                        type='date'    
                        name="birthday"
                        value={details.birthday}
                        onChange={onChangeInput}
                        // required
                        />
                        <label>Birthday</label>
                        </div>

                        <div className={Profile.inputContainer}>
                        <input
                         type='text'
                         name="address"
                         value={details.address}
                         onChange={onChangeInput}
                         required
                         />
                         <label>Address</label>
                         <span className={Profile.error}>{Aerror}</span>
                        </div>

                        <div style={{width: '100%'}}>
                    <button 
                    className={Profile.saveBtn}
                    onClick={onClickSubmitBtn}
                    >
                    Update details
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