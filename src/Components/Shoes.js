import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalBody";
import { useSelector, useDispatch } from 'react-redux';
// import {Link} from 'react-router-dom';
import '../cssModules/Home.css';
import { addToCart, cartSubTotal, AddQuantityToCart } from '../Action';
import Banner from './Banner.js';
import Nav from './Nav';
import { useHistory } from "react-router-dom"; 

const Shoes = () => {
 
    let history = useHistory();
    const clothsForSale = useSelector (state => state.ShoesForSale);
    const  ProductsInCart = useSelector(state => state.ProductsInCart);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [displaySize, setDispaySize] = useState('');
    const [displaySizeError, setDisplaySizeError] = useState('');
    const [ind, setIndex] = useState(null);
    const [modalProduct, setModalProduct] = useState({
      _id : '',
      image : '',
      design : '',
      price : '',
      subtotal : '',
      description : '',
      size : '',
      quantity : '',

    });

    const Productsizes = ind == null ? [] :  clothsForSale[ind].size.split(',');

    // this function update the size of the chosen product when activated
    const updateModalProduct = (e) => {
      setModalProduct({
        ...modalProduct,
        size : e.target.value
      });

      setDispaySize(e.target.value);
      setDisplaySizeError('');
    }

    // this function displays modal and sets the object that will be sent to cat
    const toggleModal = (i) => {
      setModalProduct({
        _id : clothsForSale[i]._id,
        image : clothsForSale[i].image,
        design : clothsForSale[i].design,
        price : clothsForSale[i].price,
        subtotal : clothsForSale[i].price,
        description : clothsForSale[i].description,
        size : clothsForSale[i].size,
        quantity : clothsForSale[i].quantity
      });
      setShowModal((prevState) => !prevState);
      setIndex(i);
    }

    const addProductToCart = () => {

      if(  displaySize === '' ){

        setDisplaySizeError("please select size")
      }

      else{

        for(let i=0; i < ProductsInCart.length; i++){

          if(ProductsInCart[i]._id === modalProduct._id && ProductsInCart[i].size === modalProduct.size){
            history.push("/cart") 
            return;
                 }
        }

        dispatch(addToCart(modalProduct))
      dispatch (cartSubTotal(clothsForSale[ind].price)) 
      dispatch(AddQuantityToCart(1))
      history.push("/cart")
      }
      
    }


  return (
   <div>
     <Nav />
  <div className="arrival-layout">
      <Banner />
      {/* view for desktop */}
      <div className='cloth-row-desktop'>
       <div className='row'>
  
  {clothsForSale.map((cloths, index) => 
      <div key={index}   className = "col-3"> 
       <div>
    <img src ={cloths.image} alt="cloths" />
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">{cloths.price} </div>
    
    <div className='addToCart' 
      onClick ={ () => toggleModal(index) }>
          View Product
    </div> 
    
          
  
  </div>
   )
   }
    </div>   
    </div>

    {/* view for mobile */}
    <div className='cloth-row-mobile'>
    <div className='row'>
  
  { clothsForSale.map((cloths, index) => 
     index < 2 ? <div key={index}   className = "col-6"> 
       <div>
    <img src ={cloths.image} alt="cloths" />
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">{cloths.price} </div>
  
    <div className ='addToCart' 
     onClick ={()=> toggleModal(index)}> 
     View Product
     </div> 

          
  
  </div> : ''
   )
   }
    </div>
    </div>  

</div>


    {/* display modal when the product image is clicked */}
  <Modal show={showModal} onHide={() => false}>
     <ModalBody>
    <div className="row">
   <div className="col-sm-5"> <img src ={ ind === null ?  "https://res.cloudinary.com/chiaka1996/image/upload/v1597252958/image10_dqpext.jpg" : clothsForSale[ind].image } alt="cloths" className="modalImage"  /></div>
   <div className="col-sm-7">
    
      <div className="modalDesign">{ ind === null ? "" : clothsForSale[ind].design}</div><br/>

      <div>
      <div className="modalExtra">N{ ind === null ? '' : clothsForSale[ind].price}</div><br/>

      <span className="modalExtra">Select size</span> <span className='displaysize'>{"  " + displaySize}</span>
      
      <div className="sizeandDescription">
     <div>
        {Productsizes.map((productsize, indexs) =>  <button value={productsize} key={indexs} onClick={updateModalProduct} className="sizeButton" >{productsize}</button>)}
        </div><br/>
      <span className="displaySizeError"> {displaySizeError} </span>
       </div><br/>


      <span className="modalExtra">Description</span>
      <div className="sizeandDescription">{ ind === null ? '' :  clothsForSale[ind].description}</div>
      </div>
     


     </div>
     
    </div>
     </ModalBody>
     <ModalFooter>
     {console.log(modalProduct)}
       <div className="modalfooter">
       <button onClick={()=>setShowModal((prevState) => !prevState)} className="closefooter">close</button>

         <button className="add-to-cart" onClick={addProductToCart }>Add to Cart</button>

       </div>
       
     </ModalFooter>
   </Modal>
    </div> 

  );
}

export default Shoes;

