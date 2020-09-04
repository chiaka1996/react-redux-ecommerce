import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalBody";
import { useSelector, useDispatch } from 'react-redux';
import '../cssModules/Home.css';
import { addToCart, cartSubTotal, AddQuantityToCart } from '../Action';
import { useHistory } from "react-router-dom";


const NewArrival = (props) => {
 
      let history = useHistory();
      let productCloth = useSelector(state => state.clothsForSale);
      let productShoe = useSelector(state => state.ShoesForSale);
      const Cloths = props.name === 'Cloths' ? productCloth: productShoe;
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

    const Productsizes = ind == null ? [] :  Cloths[ind].size.split(',');

    // this function update the size of the chosen product when activated
    const updateModalProduct = (e) => {
      setModalProduct({
        ...modalProduct,
        size : e.target.value
      });

      setDispaySize(e.target.value);
      setDisplaySizeError('');

    }


    // this function displays modal and sets the object that will be sent to cart
    const toggleModal = (i) => {
      setModalProduct({
        _id : Cloths[i]._id,
        image : Cloths[i].image,
        design : Cloths[i].design,
        price : Cloths[i].price,
        subtotal : Cloths[i].price,
        description : Cloths[i].description,
        size : Cloths[i].size,
        status : Cloths[i].status,
        productType: Cloths[i].productType,
        availableQuantity: Cloths[i].availableQuantity,
        quantity : Cloths[i].quantity
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
      dispatch (cartSubTotal(Cloths[ind].price)) 
      dispatch(AddQuantityToCart(1))
      history.push("/cart")
      }
      
    }

  return (  
  <div className="arrival-layout">
      <div className="arrivalName">{props.name}</div>

      {/* row for desktop view */}
      <div className='home-row-desktop'>
      <div className='row'>
  
  {Cloths.map((cloths, index) => 
     index < 4 ? <div key={index}
      style={{ maxWidth:'100%'}} className = "col-3"> 
       <div>
       <div>
    <img src ={cloths.image} alt="cloths"  className='productImage'/>
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">{cloths.price} </div>
    </div>
    
    <div className ='addToCart' 
    onClick ={()=> toggleModal(index) }> 
     View Product
     </div> 

  </div> : ''
   )
   }
    </div>  
    </div>

    {/* row for mobile view */}
<div className="home-row-mobile">
    <div className='row'>
  
  {Cloths.map((cloths, index) => 
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
  {/* display modal when the product image is clicked */}
  <Modal show={showModal} onHide={() => false}>
     <ModalBody>
    <div className="row">
   <div className="col-sm-5"> <img src ={ ind === null ?  "https://res.cloudinary.com/chiaka1996/image/upload/v1597252958/image10_dqpext.jpg" : Cloths[ind].image } alt="cloths" className="modalImage"  /></div>
   <div className="col-sm-7">
    
      <div className="modalDesign">{ ind === null ? "" : Cloths[ind].design}</div><br/>

      <div>
      <div className="modalExtra">N{ ind === null ? '' : Cloths[ind].price}</div><br/>

      <span className="modalExtra">Select size</span> <span className='displaysize'>{"  " + displaySize}</span>
      
      <div className="sizeandDescription">
      {Productsizes.map((productsize, indexs) =>  <button value={productsize} key={indexs} onClick={updateModalProduct} className="sizeButton" >{productsize}</button>)}
      <br/>
      <span className="displaySizeError"> {displaySizeError} </span>
       </div><br/>
       

      <span className="modalExtra">Description</span>
      <div className="sizeandDescription">{ ind === null ? '' :  Cloths[ind].description}</div>
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

export default NewArrival;