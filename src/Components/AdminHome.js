import React, {useState} from 'react';
import '../cssModules/AdminHome.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AdminNav from './AdminNav';
import { editDeleteProductIndex } from '../Action'; 
import  axios from 'axios';
import {Link} from 'react-router-dom';


function AdminHome() {

  const products = useSelector(state => state.clothsForSale);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false); 
  const [deleteMessage, setDeleteMessage] = useState('');

  //when the delete button is clicked, we send the product id to the backend.
  const onClickDelete = (id) => {

    let data = {
        _id : id
    }
    axios.post('https://protected-retreat-10926.herokuapp.com/apis/deleteProduct', data)
    .then(
        (res) => {
            setDeleteMessage(res.data);
            setShowModal(false);
        }
    ) 
  }

  return (
    
    <div className="AdminHome">
      <AdminNav name='Add Products' color='blue' link='/addforsale' />
      <div>{deleteMessage}</div>
      <table className="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">Design</th>
      <th scope="col">Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>

    {products.map((product, i) => 
      <tr key={i}>
        <th scope="row"> {i+1}</th>
        <td><img src ={product.image} width="35px" height="30px" alt="cloths"  /></td>
        <td>{product.design}</td>
        <td>{product.price}</td>
        <td>
          <div className='action'>
          <Link to="/addforsale"><FontAwesomeIcon icon="pen" size="sm" color='blue' onClick={()=> dispatch(editDeleteProductIndex(i))} /></Link>
          <div className='actionFlex'></div>
          <FontAwesomeIcon icon="trash-alt" size="sm" color='red' value={i}  onClick={()=>onClickDelete(product._id)}/>
          </div>
          </td>
      </tr>
    )}
  </tbody>
</table>
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