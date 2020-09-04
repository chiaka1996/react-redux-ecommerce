import React, { useState, useEffect }from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart, updateSubTotal, updateQuantity, updateProductInCartQuantity, RemoveAllCartProducts } from '../Action';
import Cartcss from  '../cssModules/Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useHistory} from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';

 
const Cart = () => {

      const history = useHistory();
      const ProductsInCart = useSelector(state => state.ProductsInCart);
     const loginProfile = useSelector(state => state.LoginProfile);
     const loginCheck = useSelector(state => state.LoginUsers);
     const subtotal = useSelector( state => state.AddtoSubtotal);

     let cartTotal = () => {

      let total = 0;

       for(let i=0; i < subtotal.length; i++){
        total += parseInt(subtotal[i]);
      }
      return total;
    }
    
     const cartQuantity =  useSelector(state => state.ManageCartQuantity);
     const dispatch = useDispatch();
     const [count, setcount] = useState(true);
    const [getProductInCart, setgetProductInCart] = useState(true);
     const [OrderProducts, setOrderProducts] = useState(false);
     const [orderError, setOrderError] = useState(false);
     const [orderSuccessfull, setOrderSuccessfull] = useState('');

     useEffect(()=>{
      cartTotal();
    });

     const [order, setOrder] = useState({

      username : loginCheck ? loginProfile.username :  '',
      firstname : loginCheck ? loginProfile.firstname :  '',
      lastname : loginCheck ? loginProfile.lastname :  '',
      phone : loginCheck ? loginProfile.phone :  '',
      address: loginCheck ? loginProfile.address :  '',
      total : loginCheck ? cartTotal() :  '',
      order : loginCheck ? ProductsInCart :  []
     });

    //order product
    const  OrderProduct = () => {

      if(!loginCheck){
        setOrderError(true)
      }
      else{
        setgetProductInCart((prev) => !prev);
        setOrder({
          username : loginProfile.username,
          firstname : loginProfile.firstname,
          lastname : loginProfile.lastname,
          phone : loginProfile.phone,
          address : loginProfile.address,
           total :  cartTotal(),
          order : ProductsInCart
        });
        
        setOrderProducts(true);

      }
    }

    const continueOrder = () => {
      
        // setgetProductInCart((prev) => !prev);

        console.log(order);

        axios.post('https://protected-retreat-10926.herokuapp.com/apis/allorders', order)
        .then(
            (res) => {
             
              setOrderSuccessfull(res.data);
                
            }
        ) 

        // dispatch(RemoveAllCartProducts(0));
    }

    const continueShopping = () => {
      history.push('/');
       dispatch(RemoveAllCartProducts(0));
    }
    
    
    
    //set the required quantity
    const changeQuantity = (e, index, price) => {
      
    const quantity = e.target.value;
    setgetProductInCart((prev) => !prev);
    dispatch(updateQuantity(index, quantity));
    dispatch(updateSubTotal(index, quantity, price));
    dispatch(updateProductInCartQuantity(index, quantity))
  }
  
  const delProduct = (index) => {
    dispatch(deleteProductFromCart(index));
     count ? setcount(false) : setcount(true) ;
    
 }
 
  return (
    <div>
      <span>{getProductInCart}</span>
    { orderSuccessfull !== '' ? <div style={{backgroundColor:'lightgreen', color:'white'}}> {orderSuccessfull}, we will be in contact. please, 
    <button onClick={continueShopping}  style={{color :'orange'}}>continue shopping</button></div> : 
    <div>
      <Nav />
    <div className={Cartcss.bodyFluid}>
    { OrderProducts ?
     <div className={Cartcss.orderCaution}>
          <p>please be informed that payment is only on delivery
             you are allowed to check your product, and if what you are offerred is not what 
             you ordered, please don't pay. <br/>
             <span>Note</span> : you can't return products after payment</p>
             <h3>THANKS</h3>
             <button onClick={continueOrder}>continue</button>

     </div> :
       <div >
  <div className={Cartcss.gridFlex}>
  { orderError ? <div style={{backgroundColor:'red', color:'white'}}>You must be logged in to order. please proceed to <span onClick={()=>history.push('/auth')}  style={{color :'orange'}} >login</span> page </div> : ''}
  
  <table className = "table table-bordered">
    <thead>
      <tr>
      <th>Product</th>
      <th>Amount</th>
      <th>Quantity</th>
      <th>Size</th>
     
      </tr>
    </thead>
    <tbody>

{ProductsInCart.map((products, index) =>
    <tr key ={index}>
      <td>
        <img src={products.image} alt="cloths" width="100px" height ="100px" /> 
        <div className={Cartcss.design_remove_flex}>
          <span>{products.design} </span>
          <div className={Cartcss.cart_remove_flex}></div>
        <span onClick = {() => delProduct(index)} > <FontAwesomeIcon icon="trash-alt" size="sm" color='red' /> </span>
        </div>
        
          </td>
      
      <td>{products.subtotal}</td>

      <td>
        
        <input type="number" placeholder={cartQuantity[index]}  onChange = {(e) => changeQuantity(e, index, products.price)} className={Cartcss.quantity} />
      </td>

      <td>{products.size}</td>


    </tr>
    
    )}
    </tbody>

  </table>      

{subtotal <= 0 ? null : <div className={Cartcss.cartFooter}>
 <div className ={Cartcss.cartTotal} > 
 <span className={Cartcss.totalspan1}>Total :</span> 
 <span className={Cartcss.totalspan2}> N{ subtotal.length <= 0 ? '' : cartTotal() }</span>  </div>
 
 <div className={Cartcss.flexfooter}></div>
 <div ><button onClick={OrderProduct} className ={Cartcss.cartOrder}>Order</button></div>
  </div>}
       </div>    
    </div>
    }
    </div>
    </div>
  }
  </div>
  );
}

export default Cart;