import React, {useState} from 'react';
import '../cssModules/AdminHome.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AdminNav from './AdminNav';
import AllProductsForSale from './AdminProducts';

function AdminHome() {
  const [showModal, setShowModal] = useState(false); 
  

  return (
    
    <div className="AdminHome">
      <AdminNav name='Add Products' color='blue' link='/addforsale' />

      <AllProductsForSale name='cloths' />
      <div style={{marginTop:'5%'}}></div>
      <AllProductsForSale name='shoes' />
    
    {/* <AdminLogin /> */}
    <Modal show={showModal} onHide={() => false} keyboard={false} backdrop="static" centered>
      <ModalHeader>
        <ModalTitle className='admin'><span className="adminLoginTitle">Admin Login</span></ModalTitle>
      </ModalHeader>
          <ModalBody>
            <form className='modalForm'>
            <label> Email</label><br/>
                <input type="email" name="email"  placeholder="chikajunior19@gmail.com" /> <br/>

                <label>Password</label><br />
                <input type="password" name="password" /><br/>
            </form>
          </ModalBody>
            <ModalFooter>
            <button className='btnlogin'><span >Login</span></button>
            </ModalFooter>

            </Modal> 

    </div>
  );
}

export default AdminHome;