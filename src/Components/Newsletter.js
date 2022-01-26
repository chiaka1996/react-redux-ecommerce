import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrastyle
import style from '../cssModules/newsletter.module.css';
import ProfilesideBar from './profileSideBar';
import {LoginProfile} from '../Action'; 
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate} from "react-router-dom";

const Newsletter = () => {
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
                <div className={style.profileContainer}>
                <div>
                    <ProfilesideBar name='newsletter' />
                </div>
                <div>
                <div  className={style.grid2}>
                    <div className={style.pageHeader}>
                    Newsletter Subscription
                    </div>
                    <div className={style.detailsGrid}> 
                    <div className={style.detailsGrid1}>
                    <div className={style.subscribeContainer}>
                    <div className={style.subcsribeHeader}>
                    SUBSCRIBE TO
                    </div>  
                    <div className={style.inputContainer}>                 
                    <div className={style.radioContainer} >
                    
                     <div for="her" className={style.radioLabel}>
                    <input type="radio" name="newsletter" id="her" className={style.radioInput} />
                    <div className={style.radioLetter}>daily newsletter for her</div>
                    </div> <br/>

                    <div for='him' className={style.radioLabel}>
                    <input type="radio" name="newsletter" id="him" className={style.radioInput} />
                    <div className={style.radioLetter}>daily Newsletter for her</div>
                    </div> <br/>

                    <div for='dont' className={style.radioLabel}>
                    <input checked type="radio" name="newsletter" id='dont' className={style.radioInput} />
                    <div className={style.radioLetter}>I don't want to receive Newsletter</div>
                    </div>
                    
                    <div style={{
                        width: '90%',
                        margin: '0 auto'
                    }}>
                    <button class={style.submitBtn}>Submit</button>
                    </div>
                    </div>
                    </div>

                    {/* <div>
                    <input type="radio" />
                    <label>daily newsletter for him</label>
                    </div>

                    <div>
                    <input type="radio" />
                    <label>I don't want daily newsletter</label>
                    </div> */}
                    </div> 
                    </div>
                    <div className={style.detailsGrid2}> 
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

export default Newsletter;