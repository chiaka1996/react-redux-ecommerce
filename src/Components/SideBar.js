import React,{useState} from 'react';
import barcss from  '../cssModules/Sidebar.module.css';
import { useDispatch } from 'react-redux';
import {sideBarToggleHandler } from '../Action'; 
import CloseSidebar from './CloseSideBar.js';
import {Link} from 'react-router-dom';


const SideBar = (props) => {
    const dispatch = useDispatch();
    const [showFootwear, setShowFootwear] = useState(false);
    const [showCloths, setShowCloths] = useState(false);

    const toggleFootwear = () => {
        setShowFootwear((showFootwear) => !showFootwear);
    }

    const toggleCloths = () => {
        setShowCloths((showcloths) => !showcloths);
    }


   
    return (
        // <nav>
            <div 
            className = {props.sidebar ? barcss.open: barcss.sideContainer } >
                <div className={barcss.header}>
                    <span className={barcss.headername}>CHIAKA</span> 
                    <div ></div>
                    <CloseSidebar />
                </div>
                
                <div className={barcss.subnavs}>
                <div className={barcss.navList}>
                <Link to="/"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                 >
                <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home"/>
                <span className={barcss.sidelink}>Home</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/shoes"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img alt="shoe" src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/25/000000/external-shoes-travel-checklist-photo3ideastudio-lineal-photo3ideastudio.png"/>
                <span className={barcss.sidelink}>Footwear</span>
                </Link>
                <div className={barcss.flexing}></div>
                <div className={showFootwear ? barcss.icon1Cancel : barcss.icon1} onClick={toggleFootwear}></div>
                </div> 

                <div className={showFootwear ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/shoes"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/slippers.png" alt="children shoes"/>
                <span className={barcss.sidelink}>Children footwear</span>
                </Link>
                </div>

                <div className={showFootwear ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/shoes"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/women-shoe-side-view.png" alt="women shoes"/>
                <span className={barcss.sidelink}>Women footwear</span>
                </Link>
                </div>

                <div className={showFootwear ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/shoes"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/boots.png" alt="boots"/>
                <span className={barcss.sidelink}>Men footwear</span>
                </Link>
                </div>
                
                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/clothes.png" alt="cloths"/>
                <span className={barcss.sidelink}>Clothing</span>
                </Link>
                <div className={barcss.flexing}></div>
                <div className={showCloths ? barcss.icon1Cancel : barcss.icon1} onClick={toggleCloths}></div>
                </div>

                <div className={showCloths ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/windows/24/000000/poor.png" alt="children cloths"/>
                <span className={barcss.sidelink}>Children cloths</span>
                </Link>
                </div>

                <div className={showCloths ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/24/000000/external-dress-clothes-and-fashion-kiranshastry-lineal-kiranshastry.png" alt="a dress"/>
                <span className={barcss.sidelink}>Women cloths</span>
                </Link>
                </div>

                <div className={showCloths ? barcss.subNavList : barcss.hideNavList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/coat.png" alt="coat"/>
                <span className={barcss.sidelink}>Men cloths</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-wristwatch-calendar-time-dreamstale-lineal-dreamstale.png" alt="wrist watch"/>
                <span className={barcss.sidelink}>Watches</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/material-outlined/24/000000/laptop.png" alt="computers"/>
                <span className={barcss.sidelink}>Computers</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/smartphone.png" alt="smart phone"/>
                <span className={barcss.sidelink}>Phone & accessories</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/retro-tv.png" alt="retro tv"/>
                <span className={barcss.sidelink}>Home Appliances</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img src="https://img.icons8.com/ios/24/000000/geothermal.png" alt="generator"/>
                <span className={barcss.sidelink}>Generators</span>
                </Link>
                </div>

                <div className={barcss.navList}>
                <Link to="/cloths"
                onClick={() => dispatch(sideBarToggleHandler(false))}
                >
                <img alt="body cream" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/24/000000/external-cream-hygiene-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png"/>
                 <span className={barcss.sidelink}>Beauty Care</span>
                </Link>
                </div>

                </div>

                <div className={barcss.sideBarFooter}> 
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
                style={{fill: "#000000;"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" 
                strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" 
                fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                style={{mixBlendMode: "normal"}}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                <path d="M28.66667,28.66667c-4.773,0 -8.98151,2.34406 -11.57585,5.94889c-1.74867,2.42233 -0.97612,5.85595 1.55371,7.43262l62.93229,39.2207c2.709,1.69133 6.13735,1.69133 8.84636,0l62.66634,-39.55664c2.63017,-1.66267 3.28592,-5.27623 1.34375,-7.69857c-2.61583,-3.25367 -6.60643,-5.34701 -11.09993,-5.34701zM154.19531,57.94922c-0.59931,0.00661 -1.20792,0.17178 -1.77767,0.5319l-61.99446,39.09472c-2.70901,1.68417 -6.13736,1.67734 -8.84636,-0.014l-62.00846,-38.63281c-2.279,-1.419 -5.23503,0.22396 -5.23503,2.91146v67.15951c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-67.62142c0,-2.021 -1.67342,-3.44918 -3.47135,-3.42936z"></path></g></g></svg>
                 <br/>
                <span>Contact</span>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
                style={{fill:"#000000;"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal;"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,21.5c-15.83216,0 -28.66667,12.8345 -28.66667,28.66667c0,15.83216 12.8345,28.66667 28.66667,28.66667c15.83216,0 28.66667,-12.8345 28.66667,-28.66667c0,-15.83216 -12.8345,-28.66667 -28.66667,-28.66667zM60.7207,103.93066c-0.59797,-0.00347 -1.20221,0.07167 -1.79167,0.22396c-18.84833,4.84467 -37.42904,14.32471 -37.42904,28.42871v10.75c0,3.956 3.21067,7.16667 7.16667,7.16667h114.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-10.75c0,-14.104 -18.58753,-23.58405 -37.44303,-28.42871c-2.35783,-0.60917 -4.90827,0.043 -6.60677,1.79167c-5.18867,5.3535 -12.40203,8.72038 -20.4502,8.72038c-8.04817,0 -15.25436,-3.36688 -20.4502,-8.72038c-1.27388,-1.3115 -3.0352,-2.00521 -4.8291,-2.01562z"></path></g></g></svg>
                <br/>
                <span>Login/Singup</span>
                </div>

                <div> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
                style={{fill: "#000000;"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M164.2528,162.00936l-18.43457,-43c-1.12679,-2.63501 -3.71631,-4.34269 -6.58577,-4.34269h-12.20696l4.39606,-4.38118c12.30371,-12.21273 19.07845,-28.4707 19.07845,-45.78548c0,-35.56388 -28.93262,-64.5 -64.5,-64.5c-35.56738,0 -64.5,28.93612 -64.5,64.5c0,17.31478 6.77474,33.57275 19.07845,45.77848l4.40218,4.38818h-12.21308c-2.86947,0 -5.45899,1.70768 -6.58578,4.34269l-18.43457,43c-0.95182,2.21509 -0.72087,4.75911 0.60189,6.76774c1.32975,2.01213 3.57633,3.2229 5.98389,3.2229h143.33404c2.40755,0 4.65413,-1.21077 5.98389,-3.2229c1.32275,-2.00863 1.55371,-4.55265 0.60188,-6.76774zM86,35.83333c15.81006,0 28.66667,12.86011 28.66667,28.66667c0,15.80656 -12.85661,28.66667 -28.66667,28.66667c-15.81006,0 -28.66667,-12.86011 -28.66667,-28.66667c0,-15.80656 12.85661,-28.66667 28.66667,-28.66667zM25.20196,157.66667l12.28972,-28.66667h21.86822l24.11358,24.03703c0.69287,0.69637 1.6097,1.04631 2.52653,1.04631c0.91683,0 1.83366,-0.34993 2.52653,-1.04631l24.11751,-24.03703h21.86429l12.28971,28.66667z"></path></g></g></svg>
                <br/>
                <span>Direction</span>
                </div>
                </div>
           
            </div>
        
    )
}

export default SideBar;