import React from 'react';
import '../cssModules/AdminHome.css';
import {Link} from 'react-router-dom';

const AdminNav = (props) => {
    return (
        <nav style={{width:'100%'}}>
        <div className="adminPanel">Admin Panel</div>
        <div className='adminFlex'> </div>
        
        <Link to='/allorders'><button style={{backgroundColor:'lightgreen', color:'white'}} className='orderButton'>Orders</button></Link>
        <Link to ={props.link}><button style={{backgroundColor : props.color}} className='add-exit-button'>{props.name}</button></Link>
            </nav>
    );
}

export default AdminNav; 