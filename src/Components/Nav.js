import React, {useState} from 'react';
import Navcss from  '../cssModules/Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {sideBarToggleHandler, LoginCheck, LoginProfile } from '../Action'; 
import {Link} from 'react-router-dom' ;

 
function Nav() {

  const LoginChecks =  useSelector(state => state.LoginUsers);
  const userLoginProfile =  useSelector(state => state.LoginProfile);
  

  const userName = userLoginProfile.username;

  const dispatch = useDispatch(); 

  const [profileLogout, setProfileLogout] = useState(false);
 
  return (
    <div  className={Navcss.navContainer}>
      <nav >     
    <div className= {Navcss.navigationLink}>

       <div className={Navcss.bars}>
         {/* sideBarToggleHandler has it's root in the app.js file */}
          {/* <FontAwesomeIcon icon="bars" size="lg" onClick = {props.sideBarToggleHandler} />  */}
          <FontAwesomeIcon icon="bars" size="2x" onClick = {() => dispatch(sideBarToggleHandler(true))} /> 
        </div>

        <div><Link to ="/"><div className ={Navcss.brandName}>RayStore</div></Link></div>

        <div className ={Navcss.linksdiv}>
        <div className = {Navcss.subLink}><span><Link to ="/" className={Navcss.linknav}>Home</Link></span></div>
        <div className = {Navcss.subLink}><span><Link to ="/cloths" className={Navcss.linknav}>Cloths</Link></span></div>
        <div className = {Navcss.subLink}><span><Link to ="/shoes" className={Navcss.linknav}>Shoes</Link></span></div>
        </div>

        <div className={Navcss.cartUser}>
        
          <Link to ="/cart" className={Navcss.linknav}><div className={Navcss.cartIcon}>
            <FontAwesomeIcon icon="cart-plus" size="lg" />
            <span className="cartCheck">cart</span></div>
            </Link>
            {/* </div> */}
        <div className = {Navcss.subLink3}>
          {LoginChecks ? <span className={Navcss.username} onClick={() => setProfileLogout((prev) => !prev)}>Hi, {userName} </span> :
        
        <Link to="/auth" className={Navcss.linknav2}><FontAwesomeIcon icon="user" size="lg" /></Link> 
        }

         {/* opening the logout and profile option when name is clicked */}
      <div className={profileLogout ? Navcss.displayProfileLogout : Navcss.profileLogout}>

        <Link to="/userprofile" style={{color : 'orange'}}> <span>Profile</span> </Link><br/>

          <span
           onClick={() => {
            setProfileLogout(false);
            dispatch(LoginCheck(false));
            dispatch(LoginProfile({}));
             }}>Logout</span>

          </div>
          
         </div>
        </div>
    </div>
      </nav>
     
    </div>
  );
}

export default Nav;