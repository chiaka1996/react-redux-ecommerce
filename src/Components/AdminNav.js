import React from 'react';
import '../cssModules/AdminHome.css';
import {Link} from 'react-router-dom';

const AdminNav = (props) => {
    return (
        <nav>
        <div className="adminPanel">Admin Panel</div>
        <div className='adminFlex'> </div>
        
        <Link to ={props.link}><button style={{backgroundColor : props.color}}>{props.name}</button></Link>
            </nav>
    );
}

export default AdminNav; 