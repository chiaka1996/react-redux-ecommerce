import React, {useState} from 'react';
import Navcss from  '../cssModules/Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {sideBarToggleHandler, LoginCheck, LoginProfile } from '../Action'; 
import {Link} from 'react-router-dom';

 
function Nav() {

  const [profileLogout, setProfileLogout] = useState(false);
  const [footwearHover, setFootwearHover] = useState(false);
  const [clothsHover, setClothsHover] = useState(false);
  const LoginChecks =  useSelector(state => state.LoginUsers);
  const userLoginProfile =  useSelector(state => state.LoginProfile);
  const userName = userLoginProfile.username;
  const dispatch = useDispatch(); 
 
 
  return (
    <div>
       {/* mobile navbar view */}
       <div className={Navcss.mobileNavView}> 
       <div className={Navcss.mobileNav}>
       <div className={Navcss.bars}>
         {/* sideBarToggleHandler has it's root in the app.js file */}
       {/* <FontAwesomeIcon icon="bars" size="lg" onClick = {props.sideBarToggleHandler} />  */}
     <FontAwesomeIcon icon="bars" style={{fontSize: '22px'}} onClick = {() => dispatch(sideBarToggleHandler(true))} /> 
      </div>

      <div>
      <Link to ="/">
      <div className ={Navcss.brandName}>
      C H I A K A
      </div>
      </Link>
      </div>
      <div className={Navcss.flexit}></div>
      <div className={Navcss.profileContainer}>
           {LoginChecks ? <div className={Navcss.username} 
           onClick={() => setProfileLogout((prev) => !prev)}>
             Hi, {userName} 
             </div> :
        
       <Link to="/auth">
         <img src="https://img.icons8.com/pastel-glyph/30/000000/person-male.png" title="login/signup" alt="signup/login"/>
         </Link> 
         }

        {/* opening the logout and profile option when name is clicked */}
     <div className={profileLogout ? Navcss.displayProfileLogout : Navcss.profileLogout}>
       <Link to="/userprofile" style={{color : 'black'}}>
          <span  style={{color : 'black'}}>Profile</span>
           </Link>
           <br/>
          <span
        onClick={() => {
          setProfileLogout(false);
            dispatch(LoginCheck(false));
            dispatch(LoginProfile({}));
             }}>
               Logout
            </span>
          </div>
          </div>

        <div className={Navcss.cartUser}>
        
            <Link to ="/cart" className={Navcss.linknav}>
            <div className={Navcss.cartIcon}>
            <img title="cart" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-cart-supermarket-flatart-icons-outline-flatarticons.png" alt="cart icon"/>
          </div>
         </Link> 
         </div>
        </div>

        <div style={{
        width:"96%",
        position: "relative",
        padding: "3% 0 3% 0",
        backgroundColor: "white"
        }}>
      <input type="text" placeholder="search"  className={Navcss.navInput}/>
      <div className={Navcss.searchIcon}>
      <div style={{marginTop: "10%"}}><img src="https://img.icons8.com/ios-glyphs/23/ffffff/search--v2.png" alt="search"/></div>
        </div>
      </div>
      </div>

    {/* desktop navbar view */}
    <div className={`${Navcss.navContainer} ${Navcss.desktopNavView}`}> 
    <div className={Navcss.contactInfo}>
    <div className={Navcss.contacts}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="18" height="18"
    viewBox="0 0 172 172"
    style={{fill: "#000000;"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}>
    <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c">
    <path d="M48.16,13.72641c-18.95899,0 -34.4,15.44101 -34.4,34.4v75.68c0,18.95899 15.44101,34.4 34.4,34.4h75.68c18.95899,0 34.4,-15.44101 34.4,-34.4v-75.68c0,-18.95899 -15.44101,-34.4 -34.4,-34.4zM61.94015,41.39422c2.16032,0.09288 4.14429,1.31005 5.34141,3.17797c1.36224,2.12592 3.47628,5.42531 6.22828,9.72875c2.5112,3.92504 2.68632,8.99453 0.44344,13.08813l-5.03906,7.1689c-1.36224,1.94016 -1.63394,4.42341 -0.7189,6.61125c1.42416,3.4056 4.18503,8.63956 9.09047,13.545c4.90544,4.90544 10.1394,7.66631 13.545,9.09047c2.18784,0.91504 4.67109,0.64334 6.61125,-0.7189l7.1689,-5.03906c4.0936,-2.24288 9.16309,-2.06432 13.08813,0.44344c4.30344,2.752 7.60283,4.86604 9.72875,6.22828c1.86792,1.19712 3.08509,3.18109 3.17797,5.34141c0.52976,12.26016 -8.96862,17.22687 -11.73094,17.22687c-1.91264,0 -24.90662,2.61338 -50.84078,-23.32078c-25.93416,-25.93416 -23.32078,-48.92814 -23.32078,-50.84078c0,-2.76232 4.96671,-12.2607 17.22687,-11.73094z"></path></g></g>
    </svg>
    <span className={Navcss.contactSpan}>08084052359 | 0-1234578</span>
    </div>

    <div className={Navcss.mail}> 
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="18" height="18"
    viewBox="0 0 172 172"
    style={{fill: "#000000;"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
    stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}>
    <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c">
    <path d="M48.16,13.76c-18.95899,0 -34.4,15.44101 -34.4,34.4v75.68c0,18.95899 15.44101,34.4 34.4,34.4h75.68c18.95899,0 34.4,-15.44101 34.4,-34.4v-75.68c0,-18.95899 -15.44101,-34.4 -34.4,-34.4zM44.72,55.04h82.56c0.6192,0 1.2032,0.06987 1.7536,0.24187l-33.81547,33.78188c-5.0912,5.0912 -13.37865,5.0912 -18.46985,0l-33.78188,-33.78188c0.5504,-0.172 1.1344,-0.24187 1.7536,-0.24187zM38.08187,60.1664l25.86719,25.8336l-25.86719,25.8336c-0.172,-0.5504 -0.24187,-1.1344 -0.24187,-1.7536v-48.16c0,-0.6192 0.06987,-1.2032 0.24187,-1.7536zM133.91813,60.1664c0.172,0.5504 0.24187,1.1344 0.24187,1.7536v48.16c0,0.6192 -0.06988,1.2032 -0.24187,1.7536l-25.90078,-25.8336zM68.8,90.85094l3.06375,3.09735c3.8872,3.8872 9.01145,5.81172 14.10265,5.81172c5.1256,0 10.21546,-1.92452 14.10266,-5.81172l3.09734,-3.09735l25.86719,25.86719c-0.5504,0.172 -1.1344,0.24187 -1.7536,0.24187h-82.56c-0.6192,0 -1.2032,-0.06988 -1.7536,-0.24187z"></path></g></g>
    </svg>
    <span className={Navcss.mailSpan}>chikajunior19@gmail.com</span>
    </div>
    <div className={Navcss.contactFlex}></div>
    <div>
    <div style={{width: "100px", textAlign: "right"}}> 
    <FontAwesomeIcon className={Navcss.icons} icon={["fab", "facebook-f"]} size="1x" style={{color: ' #f53218'}}/>
    <FontAwesomeIcon className={Navcss.icons} icon={["fab", "twitter"]} size="1x" style={{color: ' #f53218'}}/>
    <FontAwesomeIcon className={Navcss.icons} icon={["fab", "instagram"]} size="1x" style={{color: ' #f53218'}}/>
    <FontAwesomeIcon className={Navcss.icons} icon={["fas", "envelope"]} size="1x" style={{color: ' #f53218'}}/>
    </div>
    </div>
    </div>
    <nav>
      <div className={Navcss.navigationLink}>
      <Link to="/" style={{textDecoration: 'none'}}>
      <div className={Navcss.brandName}>C H I A K A</div>
      </Link>

      <div style={{
        width:"70%",
        position: "relative"
        }}>
      <input type="text" placeholder="search"  className={Navcss.navInput}/>
      <div className={Navcss.searchIcon}>
      <div style={{marginTop: "10%"}}>
      <img src="https://img.icons8.com/ios-glyphs/23/000000/search--v2.png" alt="search icon"/></div>
        </div>
      </div>

      <div>
           {LoginChecks ? <div className={Navcss.username} 
           onClick={() => setProfileLogout((prev) => !prev)}>
             Hi, {userName}
             </div> :      
       <Link to="/auth">
         <img src="https://img.icons8.com/pastel-glyph/40/000000/person-male.png" title="login/signup" alt="sign up/login"/>
         </Link> 
         }

        {/* opening the logout and profile option when name is clicked */}
     <div className={profileLogout ? Navcss.displayProfileLogout : Navcss.profileLogout}>
       <Link to="/profile" style={{color : 'black', textDecoration: 'none'}}> 
       <span>Profile</span> 
       </Link>
       <br/>
         <span
        onClick={() => {
          setProfileLogout(false);
            dispatch(LoginCheck(false));
            dispatch(LoginProfile({}));
             }}>
               Logout
               </span>

          </div>
          </div>

          <div className={Navcss.cartUser}>
        
            <Link to ="/cart" className={Navcss.linknav}>
            <div className={Navcss.cartIcon}>
            <img title="cart" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/40/000000/external-cart-supermarket-flatart-icons-outline-flatarticons.png" alt="cart icon"/>
          </div>
         </Link> 
         </div>
         </div>
    </nav>

    <div className={Navcss.itemList}>
          <div>
          <img src="https://img.icons8.com/material-sharp/24/000000/price-tag.png" alt="deals icon"/> 
          <span className={Navcss.itemName}>Deals</span>
          </div>

          <div className={Navcss.footwearDiv}
          onMouseEnter={() => setClothsHover(true)}
          onMouseLeave={() => setClothsHover(false)}>
           <Link to="/cloths" style={{textDecoration: 'none'}}> 
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/18/000000/external-dress-clothes-and-fashion-kiranshastry-lineal-kiranshastry.png" alt="a dress"/>
          <span className={Navcss.itemName}>Cloths</span>
          </Link>
          <img src="https://img.icons8.com/material-outlined/12/000000/expand-arrow--v2.png" alt="expand arrow"/>
          <div className={!clothsHover ? Navcss.footwearSubDiv : Navcss.displayFootwear}>
          <div className={Navcss.item}>Children Cloths</div>
          <div className={Navcss.item}>Women Cloths</div>
          <div className={Navcss.item}>Men Cloths</div>
          </div>
          </div>

          <div>
          <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/000000/external-wristwatch-calendar-time-dreamstale-lineal-dreamstale.png" alt="wrist watch"/>
          <span className={Navcss.itemName}>Watches</span>
          </div>

          <div className={Navcss.footwearDiv}
          onMouseEnter={() => setFootwearHover(true)}
          onMouseLeave={() => setFootwearHover(false)}>
          <Link to="/shoes" style={{textDecoration: 'none'}}> 
          <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/18/000000/external-boots-clothes-dreamstale-lineal-dreamstale.png" alt="boots"/>
          <span className={Navcss.itemName}>Footwear</span>
          </Link>  
          <img src="https://img.icons8.com/material-outlined/12/000000/expand-arrow--v2.png" alt="expand arrow"/>
          
          <div className={!footwearHover ? Navcss.footwearSubDiv : Navcss.displayFootwear}>
          <div className={Navcss.item}>Children footwear</div>
          <div className={Navcss.item}>Women footwear</div>
          <div className={Navcss.item}>Men footwear</div>
          </div>
          </div>

          <div>
          <img src="https://img.icons8.com/material-outlined/18/000000/laptop.png" alt="computers"/>
          <span className={Navcss.itemName}>Computer</span>
          </div>

          <div>
          <img src="https://img.icons8.com/ios/18/000000/smartphone.png" alt="smart phone"/>
          <span className={Navcss.itemName}>Phones & Accessories</span>
          </div>
          <div>
          <img src="https://img.icons8.com/ios/18/000000/retro-tv.png" alt="retro tv"/>
          <span className={Navcss.itemName}>Home Appliances</span>
          </div>

          <div> 
          <img src="https://img.icons8.com/ios/18/000000/geothermal.png" alt="generator"/>
          <span className={Navcss.itemName}>Generator</span>
          </div>
          <div>
          <img alt="body cream" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/18/000000/external-cream-hygiene-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png"/>
          <span className={Navcss.itemName}>Beauty care </span>
          </div>
    </div> 
    <div style={{
      width: "88%",
      borderRadius: "20px",
      backgroundColor: "#f53218",
      margin: "0.5% auto",
      height: "6px"
    }}
    ></div>
    </div>
    </div>
  );
}

export default Nav;