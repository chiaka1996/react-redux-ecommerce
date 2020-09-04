import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import  '../cssModules/Userprofile.css';
import {LoginProfile, LoginCheck, ToggleProfileOrder } from '../Action'; 
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const UserProfile = () => {
 
    const dispatch = useDispatch();

    const history = useHistory();

    const  profileDetails = useSelector(state => state.LoginProfile);

    // check if user is logged in or not
    const  checkLogin = useSelector(state => state.LoginUsers);

    const  ProfileOrderToggle = useSelector(state => state.ToggleProfileOrder);
   
    const [editProfile, setEditProfile] = useState(true);

    const [successmessage, setMessage] = useState('');

    const[toggleOrder, setToggleOrder] = useState(true);

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

    const [orderlist, setOrderList] = useState([]);

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
        history.push('/');


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
            <Nav />
            { checkLogin ? 
            <div className='profileContainer'>

                <div className='profileMenu'>  
                        <section> 
                    <div className ='profileList'><span onClick={onclickProfile} >Proflie</span></div>
                    <div className ='profileList'><span onClick={onclickOrder}>Recent Orders</span></div>
                    </section>
                    <div className='logoutButton' onClick={logoutUser}>Logout</div>
                </div>

                    <div className='flexspace'></div>

                <div className='profileContent'>
                        {ProfileOrderToggle ? <div>
                    <div className='successmessage'>{successmessage}</div>
                    <div className='allListrow' >

                        {/* first row */}
                    <div className='listrow'>
                        <div className="listnames1">
                        <p>First Name</p>
                         { !editProfile ? <input type='text' name='firstname' className='inputEdit' value={editedProfileDetails.firstname} onChange={onChangeInput}  /> : <span>{editedProfileDetails.firstname}</span> }
                        </div>


                        <div className='listnames2'>
                        <p>LastName</p>
                        { !editProfile ? <input type='text' name='lastname' value={editedProfileDetails.lastname} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.lastname}</span> }
                        </div>      

                    </div>

                        {/* second row */}
                    <div className='listrow'>
                        <div className='listnames1'>
                        <p>Username</p>
                        { !editProfile ? <input type='text' name='username' value={editedProfileDetails.username} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.username}</span> }
                       
                        </div>

                        <div className='listnames2'>
                        <p>Email</p>
                        { !editProfile ? <input type='text' name='email' value={editedProfileDetails.email} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.email}</span> }
                       
                        </div>                    
                    </div>

                        {/* third row */}
                    <div className='listrow'>
                        <div className='listnames1'>
                        <p>Phone</p>
                        { !editProfile ? <input type='Number' name='phone' value={editedProfileDetails.phone} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.phone}</span> }
                       
                        </div>
                        
                        <div className='listnames2'>
                        <p>Address</p>
                        { !editProfile ? <input type='text' name='address' value={editedProfileDetails.address} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.address}</span> }
                       
                        </div> 
                                           
                    </div>

                    {/* fourth row */}
                    <div className='listrow'>
                        <div className='listnames1'>
                        <p>State</p>
                        { !editProfile ? <input type='text' name='state' value={editedProfileDetails.state} onChange={onChangeInput} className='inputEdit' /> : <span>{editedProfileDetails.state}</span> }
                       
                        </div>

                        <div> 
                            
                    {editProfile ?<button onClick={changeButton} className='profileButton'><span>Edit-</span> <span>profile</span> </button> 
                    : <button onClick={updateProfile} className='profileButton'> <span>Update- </span> <span> profile</span> </button> }
                            
                        </div>
                                           
                    </div>

                    </div>
            </div> : orderlist.length === 0 ?  <div>
                <div>you haven't order anything yet.</div>
            </div> : <div className='orderBody'>
                <table className='table table-bordered profileTable'>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>

                    </thead>
                    
                    <tbody>
                    {orderlist.map((ord, inds) =>  <tr key={inds} className='orderRow'>
                            <td>
                             <img src={ord.image} alt='order design' className='profileImage' />
                              <br/>{ord.design}</td>
                            <td>{ord.quantity}</td>
                            <td>{ord.subtotal}</td>
                        </tr>

                    )
                    
                    } 

                    </tbody>
                </table>
            </div>
    }
                </div>


            </div>  : <div className="notLoggedIn">
                    <span>Please Proceed to <i onClick={()=> history.push('/auth')} style={{color : 'orange'}}>Login</i> Page </span>
            </div>
            }
        </div>
    )
}

export default UserProfile ;