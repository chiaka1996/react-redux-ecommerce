import React from 'react';
import barcss from  '../cssModules/Sidebar.module.css';
import CloseSidebar from './CloseSideBar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


const SideBar = (props) => {
   
    return (

        <nav>
            <div className = {props.sidebar ? `${barcss.sideContainer} ${barcss.open}`: barcss.sideContainer } >
                <header className={barcss.header}>
                    <span className={barcss.headername}>RayStore</span> 
                    <div ></div>
                    <CloseSidebar />
                </header>
                
                <div className={barcss.subnavs}>
                <div><Link to="/" ><FontAwesomeIcon icon ='home' size='lg'  /><span className={barcss.sidelink}>Home</span></Link></div>
                <div><Link to="/shoes"><FontAwesomeIcon icon ='shoe-prints' size='lg' /><span className={barcss.sidelink}>Shoes</span></Link></div>
                <div><Link to="/cloths"><FontAwesomeIcon icon ='tshirt' size='lg' /><span className={barcss.sidelink}>Cloths</span></Link></div>
                </div>
           
            </div>
        </nav>
        
    )
}

export default SideBar;