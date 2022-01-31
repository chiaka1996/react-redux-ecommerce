import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilesideBar from './profileSideBar';
import Profile from '../cssModules/Userprofile.module.css';
import {LoginProfile, LoginCheck, ToggleProfileOrder } from '../Action'; 
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';


const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  profileDetails = useSelector(state => state.LoginProfile);

    // check if user is logged in or not
    const  checkLogin = useSelector(state => state.LoginUsers);
    const  ProfileOrderToggle = useSelector(state => state.ToggleProfileOrder);
    const [editProfile, setEditProfile] = useState(true);
    const [successmessage, setMessage] = useState('');
    const[toggleOrder, setToggleOrder] = useState(true);
    const [orderlist, setOrderList] = useState([]);
    const [editedProfileDetails, setEditedProfileDetails] = useState({
        _id : profileDetails._id,
        firstname: profileDetails.firstname, 
        lastname : profileDetails.lastname,
        username : profileDetails.username,
        phone :  profileDetails.phone,
        email : profileDetails.email,
        state : profileDetails.state,
        address : profileDetails.address,
        password : profileDetails.password
    } );

     useEffect(() => {  
        if(checkLogin ){
         axios.post('https://protected-retreat-10926.herokuapp.com/apis/getsignupdetails', profileDetails )
        .then((res) => {
            setEditedProfileDetails({
                _id : res.data._id,
                firstname : res.data.firstname,
                lastname :  res.data.lastname,
                username :  res.data.username,
                phone :  res.data.phone,
                email :  res.data.email,
                state :  res.data.state,
                address :  res.data.address,
                password :  res.data.password
            })
        });
 
        //get orders from the backend
        axios.post('https://protected-retreat-10926.herokuapp.com/apis/getUserOrders', profileDetails)
        .then((res) => {
            let data = res.data;
            data.forEach((ord) => {
            
            setOrderList((prev)=> [...prev, ...ord.order]);      
            })
            });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editProfile, toggleOrder]);

    const updateProfile = () => {
        axios.put('https://protected-retreat-10926.herokuapp.com/apis/updatesignup', editedProfileDetails )
    .then(
        (res) => {
            dispatch(LoginProfile(editedProfileDetails));
            setMessage(res.data.message);
            setEditProfile((prev)=> !prev);
        }
    ) 
    }

    const onChangeInput = (e) => {    
        let inputValue = e.target.value;
        let name = e.target.name;
        setEditedProfileDetails({
            ...editedProfileDetails,
            [name] : inputValue
        });       
    }

    const changeButton = () => {
        setEditProfile((prev)=> !prev); 
        setMessage('');
    }

    const logoutUser = () => {
        dispatch(LoginProfile({}));
        dispatch(LoginCheck(false));
        navigate('/');
    } 

    const onclickProfile= () => {
        dispatch(ToggleProfileOrder(true));
        setToggleOrder((prev) => !prev);
    }

    const onclickOrder = () => {
        dispatch(ToggleProfileOrder(false));
        setToggleOrder((prev) => !prev);
    }

    return (
        <div className="bodyContainer">
            { checkLogin ? <div className={Profile.profileContainer}>
                <div>
                    <ProfilesideBar name='my account' />
                </div>

                <div>
                <div className={Profile.grid2}> 
                <div className={Profile.overview}>Account Overview</div>
                <div className={Profile.accountGrid}>
                <div className={Profile.accountGrid1}>
                <div className={Profile.storeCredit}>
                <div className={Profile.creditHeader}>
                CHIAKA STORE CREDIT
                </div>
                <div className={Profile.creditDetails}> 
                <img src="https://img.icons8.com/ios/20/blue/wallet--v1.png" alt="wallet"/>
                <span className={Profile.creditAmount}>N<span>0.00</span></span>
                </div>
                </div>

                <div className={Profile.storeCredit}>
                <div className={Profile.creditHeader}>
                NEWSLETTER PREFERENCES
                </div>
                <div className={Profile.creditDetails}> 
                <p>
                You are currently not subscribed
                 to any of our newsletters.
                 </p>
                </div>
                <div className={Profile.editNewsletter}>
                EDIT NEWSLETTER PREFERENCE
                </div>
                </div>
                </div>

                <div className={Profile.accountGrid2}>
                <div className={Profile.storeCredit}>
                <div  className={Profile.acctHeader}>
                <div>Account Details</div>
                <div className={Profile.Flex}></div>
                <Link to="/profile/details">
                <span>
                <img src="https://img.icons8.com/material/15/red/pencil--v2.png" alt="edit"/>
                </span>
                </Link>
                </div>
                <div className={Profile.creditDetails}> 
                <p>Osuji chiaka Daniel</p>
                <div className={Profile.subParagraph}>
                chiakajunior@yahoo.com
                </div>
                </div>
                
                <div className={Profile.editNewsletter} style={{marginTop: '9%'}}>
                <Link 
                    to ="/profile/change_password" 
                    style={{color: 'red', textDecoration: 'none'
                    }}>
                CHANGE PASSWORD
                </Link>
                </div>
                </div>

                <div className={Profile.storeCredit}>
                <div className={Profile.acctHeader}>
                <div>ADDRESS BOOK</div>
                <div className={Profile.Flex}></div>
                <span>
                <img src="https://img.icons8.com/material/15/red/pencil--v2.png" alt="edit"/>
                </span>
                </div>
                <div className={Profile.creditDetails}> 
                <p>Your default shipping address</p>
                <div className={Profile.subParagraph}>
                <span>Osuji Chiaka Daniel</span><br/>
                <span>40, Samuel Street, Mafoluku, Oshodi, Lagos, Nigeria</span><br/>
                <span>+2348084052359, +2348150416870</span>
                </div>
                
                </div>
                </div>
                </div>
                
                </div>
                </div>
                </div>
            </div>
    //         <div className='profileContainer'>

    //             <div className='profileMenu'>  
    //                     <section> 
    //                 <div className ='profileList'><span onClick={onclickProfile} >Proflie</span></div>
    //                 <div className ='profileList'><span onClick={onclickOrder}>Recent Orders</span></div>
    //                 </section>
    //                 <div className='logoutButton' onClick={logoutUser}>Logout</div>
    //             </div>

    //                 <div className='flexspace'></div>

    //             <div className='profileContent'>
    //                     {ProfileOrderToggle ? <div>
    //                 <div className='successmessage'>{successmessage}</div>
    //                 <div className='allListrow' >

    //                     {/* first row */}
    //                 <div className='listrow'>
    //                     <div className="listnames1">
    //                     <p>First Name</p>
    //                      { !editProfile ? <input type='text' name='firstname' className='inputEdit' value={editedProfileDetails.firstname} onChange={onChangeInput}  /> : <span>{editedProfileDetails.firstname}</span> }
    //                     </div>


    //                     <div className='listnames2'>
    //                     <p>LastName</p>
    //                     { !editProfile ? <input type='text' name='lastname' value={editedProfileDetails.lastname} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.lastname}</span> }
    //                     </div>      

    //                 </div>

    //                     {/* second row */}
    //                 <div className='listrow'>
    //                     <div className='listnames1'>
    //                     <p>Username</p>
    //                     { !editProfile ? <input type='text' name='username' value={editedProfileDetails.username} className='inputEdit' /> : <span>{editedProfileDetails.username}</span> }
                       
    //                     </div>

    //                     <div className='listnames2'>
    //                     <p>Email</p>
    //                     { !editProfile ? <input type='text' name='email' value={editedProfileDetails.email} className='inputEdit' /> : <span>{editedProfileDetails.email}</span> }
                       
    //                     </div>                    
    //                 </div>

    //                     {/* third row */}
    //                 <div className='listrow'>
    //                     <div className='listnames1'>
    //                     <p>Phone</p>
    //                     { !editProfile ? <input type='Number' name='phone' value={editedProfileDetails.phone} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.phone}</span> }
                       
    //                     </div>
                        
    //                     <div className='listnames2'>
    //                     <p>Address</p>
    //                     { !editProfile ? <input type='text' name='address' value={editedProfileDetails.address} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.address}</span> }
                       
    //                     </div> 
                                           
    //                 </div>

    //                 {/* fourth row */}
    //                 <div className='listrow'>
    //                     <div className='listnames1'>
    //                     <p>State</p>
    //                     { !editProfile ? <input type='text' name='state' value={editedProfileDetails.state} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.state}</span> }
                       
    //                     </div>

    //                     <div> 
                            
    //                 {editProfile ?<button onClick={changeButton} className='profileButton'><span>Edit-</span> <span>profile</span> </button> 
    //                 : <button onClick={updateProfile} className='profileButton'> <span>Update- </span> <span> profile</span> </button> }
                            
    //                     </div>
                                           
    //                 </div>

    //                 </div>
    //         </div> : orderlist.length === 0 ?  <div>
    //             <div>you haven't order anything yet.</div>
    //         </div> : <div className='orderBody'>
    //             <table className='table table-bordered profileTable'>
    //                 <thead>
    //                     <tr>
    //                         <th>image</th>
    //                         <th>Quantity</th>
    //                         <th>Total Price</th>
    //                     </tr>

    //                 </thead>
                    
    //                 <tbody>
    //                 {orderlist.map((ord, inds) =>  <tr key={inds} className='orderRow'>
    //                         <td>
    //                          <img src={ord.image} alt='order design' className='profileImage' />
    //                           <br/>{ord.design}</td>
    //                         <td>{ord.quantity}</td>
    //                         <td>{ord.subtotal}</td>
    //                     </tr>

    //                 )
                    
    //                 } 

    //                 </tbody>
    //             </table>
    //         </div>
    // }
    //             </div>


    //         </div> 
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
    )
}

export default UserProfile ;