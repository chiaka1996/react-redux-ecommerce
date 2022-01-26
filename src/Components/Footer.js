import React,{useState} from 'react' ;
import footercss from  '../cssModules/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const [showFind, setShowPlus] = useState(true);
    const [showInformation, setShowInformation] = useState(true);
    const [showSpotLight, setShowSpotLight] = useState(true);

    const toggleFind = () => {
        setShowPlus((showPlus) => !showPlus);
    }

    const toggleInformation = () => {
        setShowInformation((showInformation) => !showInformation)
    }

    const toggleSpotLight = () => {
        setShowSpotLight((showSpotLight) => !showSpotLight);
    }

return(
    <div className={footercss.footerContainer}>
    <div className={footercss.newsLetter}> 
    <div className={footercss.newsLetterHeader}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="40" height="40"
    viewBox="0 0 172 172"
    style={{fill: "#000000"}}>
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M147.5975,6.88c-26.39125,-0.14781 -51.86875,10.26625 -70.6275,29.025l-12.685,12.685l-0.1075,1.1825l-3.01,26.66c-0.73906,0.34938 -1.43781,0.79281 -2.0425,1.3975l-6.02,6.02c-2.98312,2.98313 -2.98312,7.98188 0,10.965l0.645,0.645l-7.2025,7.2025l-3.655,-3.655l-1.29,-1.3975l-1.8275,0.43c0,0 -16.47437,3.57438 -31.9275,19.0275l-2.365,2.365l2.365,2.4725l42.2475,42.2475l2.4725,2.365l2.365,-2.365c15.81594,-15.81594 19.0275,-31.9275 19.0275,-31.9275l0.3225,-1.8275l-4.8375,-4.8375l7.2025,-7.2025l0.5375,0.5375c2.98313,2.98313 7.98188,2.98313 10.965,0l6.02,-6.02c0.63156,-0.63156 1.14219,-1.38406 1.505,-2.15l26.5525,-2.9025l1.1825,-0.1075l12.685,-12.685c20.00844,-20.00844 30.47625,-47.64937 28.81,-75.895l-0.43,-8.385l-0.215,-3.01l-3.01,-0.215l-8.385,-0.43c-1.76031,-0.1075 -3.50719,-0.20156 -5.2675,-0.215zM147.49,13.76c1.63938,0.01344 3.30563,0.01344 4.945,0.1075l5.2675,0.3225l0.3225,5.375c1.14219,19.43063 -3.88344,38.55219 -14.0825,54.7175c-3.25187,-1.97531 -6.96062,-3.01 -10.6425,-3.01c-5.25406,0 -10.52156,2.02906 -14.5125,6.02c-6.5575,6.54406 -7.65937,16.51469 -3.44,24.295l-19.35,2.2575l-27.8425,-27.8425l2.15,-19.35c7.79375,4.25969 17.83156,3.13094 24.4025,-3.44c6.78594,-6.78594 7.78031,-17.26719 3.01,-25.155c14.80813,-9.36594 32.04844,-14.39156 49.7725,-14.2975zM92.02,31.9275c2.98313,5.20031 2.31125,11.87875 -2.15,16.34c-4.71656,4.71656 -11.89219,5.21375 -17.2,1.6125l9.1375,-9.1375c3.19813,-3.19812 6.62469,-6.15437 10.2125,-8.815zM133.4075,78.1525c2.32469,0 4.58219,0.63156 6.665,1.8275c-2.66062,3.58781 -5.61687,7.01438 -8.815,10.2125l-0.645,0.5375l-8.4925,8.6c-3.60125,-5.30781 -3.10406,-12.48344 1.6125,-17.2c2.67406,-2.67406 6.19469,-3.9775 9.675,-3.9775zM64.5,82.56c0.20156,0 0.47031,0.04031 0.645,0.215l24.08,24.08c0.34938,0.34938 0.34938,0.83313 0,1.1825l-6.02,6.02c-0.34937,0.34938 -0.72562,0.34938 -1.075,0l-0.645,-0.5375l-2.365,-2.4725l-18.1675,-18.06l-2.365,-2.4725l-0.43,-0.43l-0.215,-0.1075c-0.34937,-0.34937 -0.34937,-0.83312 0,-1.1825l6.02,-6.02c0.17469,-0.17469 0.33594,-0.215 0.5375,-0.215zM58.5875,100.2975l13.2225,13.2225l-7.2025,7.2025l-13.2225,-13.2225zM39.56,105.35l4.515,4.515l18.06,18.1675l4.515,4.4075c-0.44344,1.94844 -3.27875,11.83844 -14.405,24.08l-36.765,-36.765c11.9325,-10.79031 22.01063,-13.89437 24.08,-14.405z"></path></g></g>
    </svg>
    <span style={{marginLeft: "3%"}}>Sign up to Newsletter</span>
    </div>
    <div className={footercss.newsLetterSubHeader}>
    ...and be the first to be notified when new products are available
    </div>
    <div className={footercss.newsLetterInput}>
    <input type="text" placeholder="Enter your Email address" className={footercss.footerInput}  />
    <div className={footercss.subscribe}>Subscribe</div>
    </div>
    </div>

    <div className={footercss.footerMenu}> 
    <div className={footercss.brandName}>
    <div className={footercss.chiaka}>C H I A K A</div>
    <div className={footercss.contactNumber}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="50" height="50"
    viewBox="0 0 172 172"
    style={{fill: "#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,3.44c-32.02156,0 -58.42625,24.38906 -61.5975,55.5775c-3.14437,1.02125 -5.64375,3.52063 -6.665,
    6.665c-4.90469,0.98094 -9.16437,4.34031 -12.1475,8.815c-3.56094,5.33469 -5.59,12.3625 -5.59,20.1025c0,7.74 2.02906,14.76781 5.59,20.1025c2.98313,4.47469 7.24281,7.83406 12.1475,8.815c1.34375,4.13875 5.21375,7.2025 9.7825,7.2025c5.65719,0 10.32,-4.66281 10.32,-10.32v-51.6c0,-4.27312 -2.70094,-7.90125 -6.45,-9.46c3.01,-27.57375 26.23,-49.02 54.61,-49.02c28.38,0 51.6,21.44625 54.61,49.02c-3.74906,1.55875 -6.45,5.18688 -6.45,9.46v51.6c0,4.39406 2.86219,8.08938 6.7725,9.5675c-0.47031,6.57094 -2.70094,11.51594 -6.235,15.05c-3.99094,3.99094 -9.82281,6.3425 -17.7375,6.3425h-10.965c-1.43781,-3.9775 -5.22719,-6.88 -9.675,-6.88h-17.2c-5.65719,0 -10.32,4.66281 -10.32,10.32c0,5.65719 4.66281,10.32 10.32,10.32h17.2c4.44781,0 8.23719,-2.9025 9.675,-6.88h10.965c9.28531,0 17.21344,-2.80844 22.6825,-8.2775c4.91813,-4.91812 7.65938,-11.79812 8.17,-19.8875c3.03688,-1.06156 5.45563,-3.49375 6.45,-6.5575c4.90469,-0.98094 9.16438,-4.34031 12.1475,-8.815c3.56094,-5.33469 5.59,-12.3625 5.59,-20.1025c0,-7.74 -2.02906,-14.76781 -5.59,-20.1025c-2.98312,-4.47469 -7.24281,-7.83406 -12.1475,-8.815c-1.02125,-3.14437 -3.52062,-5.64375 -6.665,-6.665c-3.17125,-31.18844 -29.57594,-55.5775 -61.5975,-55.5775zM27.52,65.36c1.935,0 3.44,1.505 3.44,3.44v51.6c0,1.935 -1.505,3.44 -3.44,3.44c-1.935,0 -3.44,-1.505 -3.44,-3.44v-51.6c0,-1.935 1.505,-3.44 3.44,-3.44zM144.48,65.36c1.935,0 3.44,1.505 3.44,3.44v51.6c0,1.935 -1.505,3.44 -3.44,3.44c-1.935,0 -3.44,-1.505 -3.44,-3.44v-51.6c0,-1.935 1.505,-3.44 3.44,-3.44zM17.2,72.9925v43.215c-2.13656,-0.91375 -4.16562,-2.64719 -5.9125,-5.2675c-2.66062,-3.99094 -4.4075,-9.83625 -4.4075,-16.34c0,-6.50375 1.74688,-12.34906 4.4075,-16.34c1.74688,-2.62031 3.77594,-4.35375 5.9125,-5.2675zM154.8,72.9925c2.13656,0.91375 4.16563,2.64719 5.9125,5.2675c2.66063,3.99094 4.4075,9.83625 4.4075,16.34c0,6.50375 -1.74687,12.34906 -4.4075,16.34c-1.74687,2.62031 -3.77594,4.35375 -5.9125,5.2675zM79.12,151.36h17.2c1.935,0 3.44,1.505 3.44,3.44c0,1.935 -1.505,3.44 -3.44,3.44h-17.2c-1.935,0 -3.44,-1.505 -3.44,-3.44c0,-1.935 1.505,-3.44 3.44,-3.44z"></path></g></g>
    </svg>
    <div className={footercss.gotQuestion}>
    Got questions? Call us 24/7!<br/>
    <span>08084052359 | 08150416870</span>
    </div>
    </div>

    <div className={footercss.payOnDelivery}> 
    <span>Pay on Delivery Accepted Region</span>
    <div>Lagos | Ibadan | Portharcourt</div> 
    </div>  

    <div> 
    <FontAwesomeIcon className={footercss.icons} icon={["fab", "facebook-f"]} size="1x" style={{color: 'rgb(58, 57, 57)'}}/>
    <FontAwesomeIcon className={footercss.icons} icon={["fab", "twitter"]} size="1x" style={{color: 'rgb(58, 57, 57)'}}/>
    <FontAwesomeIcon className={footercss.icons} icon={["fab", "instagram"]} size="1x" style={{color: 'rgb(58, 57, 57)'}}/>
    <FontAwesomeIcon className={footercss.icons} icon={["fas", "envelope"]} size="1x" style={{color: 'rgb(58, 57, 57)'}}/>

    </div>
    </div>

    <div className={footercss.gridItem}>
    <div className={footercss.subHeader}>
    <span>Find in Fast</span>
    <div className={footercss.flexing}></div>
    <div className={!showFind ? footercss.icon1Cancel : footercss.icon1} onClick={toggleFind}></div> 
    </div>              
    <ul className={!showFind ? footercss.displayList : footercss.hideList}> 
        <li>Cloths</li>
        <li>Footwears</li>
        <li>Watches</li>
        <li>Computers</li>
        <li>Phones & Accessories</li>
        <li>Home Appliances</li>
        <li>Generators</li>
        <li>Beauty care</li>
    </ul>
    </div>

    <div className={footercss.gridItem}>
    <div className={footercss.subHeader}>
    <span>Informations</span>
    <div className={footercss.flexing}></div>
    <div className={!showInformation ? footercss.icon1Cancel : footercss.icon1} onClick={toggleInformation}></div>              
    </div>
     <ul className={!showInformation ? footercss.displayList : footercss.hideList} > 
        <li>Blogs</li>
        <li>Company</li>
        <li>Investors</li>
        <li>Carreer</li>
        <li>Cash on Delivery</li>
        <li>Core Values</li>
        <li>FAQ</li>
        <li>Shopping and Return</li>
    </ul>

    </div>

    <div className={footercss.gridItem}>
    <div className={footercss.subHeader}>
    <span>In the Sportlight</span>
    <div className={footercss.flexing}></div>
    <div className={!showSpotLight ? footercss.icon1Cancel : footercss.icon1} onClick={toggleSpotLight}></div>              
    </div>
    <ul className={!showSpotLight? footercss.displayList : footercss.hideList}> 
        <li>My Account</li>
        <li>Shopping Cart</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Shipping Policy</li>
        <li>Terms of Service</li>
    </ul>
    </div>

    </div>
    </div>
)
}

export default Footer;