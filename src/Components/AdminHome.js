import React, {useState} from 'react';
import '../cssModules/AdminHome.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AdminNav from './AdminNav';
import AllProductsForSale from './AdminProducts';
import {useSelector, useDispatch } from 'react-redux';
import { AdminCheck} from '../Action';

function AdminHome() {

  let loginCheck = useSelector(state => state.AdminLogin);
  const dispatch = useDispatch();
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onLogin = () => {
    console.log(email);
    console.log(password);
    if(email === 'chiakajunior@yahoo.com' && password==='chiaka2020'){
        dispatch(AdminCheck(false));
        setErrorMessage('login Successfull');
    }
    else{
      setErrorMessage('invalid credentials');
    }
  }
  

  return (
    
    <div className="AdminHome">
      <AdminNav name='Add Products' color='blue' link='/addforsale' />

      <AllProductsForSale name='cloths' />
      <div style={{marginTop:'5%'}}></div>
      <AllProductsForSale name='shoes' />
    
    {/* <AdminLogin /> */}
    <Modal show={loginCheck} onHide={() => false} keyboard={false} backdrop="static" centered>
      <div>{errorMessage}</div>
      <ModalHeader>
        <ModalTitle className='admin'><span className="adminLoginTitle">Admin Login</span></ModalTitle>
      </ModalHeader>
          <ModalBody>
            <form className='modalForm'>
            <label> Email</label><br/>
                <input type="email" name="email" onChange={onChangeEmail} placeholder="chikajunior19@gmail.com" /> <br/>

                <label>Password</label><br />
                <input type="password" name="password" onChange={onChangePassword} /><br/>
            </form>
          </ModalBody>
            <ModalFooter>
            <button className='btnlogin' onClick={ onLogin}><span>Login</span></button>
            </ModalFooter>

            </Modal> 

    </div>
  );
}

export default AdminHome;