import React,{useState} from 'react';
import '../cssModules/AdminHome.css';
import { useSelector, useDispatch} from 'react-redux';
import { editDeleteProductIndex } from '../Action'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AllProductsForSale = (props) => {

        const clothProducts = useSelector(state => state.clothsForSale);
        const shoeProducts = useSelector(state => state.ShoesForSale);
        const products = props.name === 'cloths' ? clothProducts : shoeProducts ;

    const dispatch = useDispatch();
    
    const [deleteMessage, setDeleteMessage] = useState('');

      //when the delete button is clicked, we send the product id to the backend.
    const onClickDelete = (id) => {

        let data = {
            _id : id
        }
        axios.post('https://protected-retreat-10926.herokuapp.com/apis/deleteProduct', data)
        .then(
            (res) => {
                setDeleteMessage(res.data.message);
            }
        ) 
      }

    return(
        <div>
            <div>{deleteMessage}</div>
            <div style={{backgroundColor:'darkblue', color:'white'}}>{props.name}</div>
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
        </div>
    )
}

export default AllProductsForSale;