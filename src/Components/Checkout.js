import React,{useState,useEffect} from 'react';
import { useLocation} from "react-router-dom";
import checkout from  '../cssModules/CheckOut.module.css';
import '../cssModules/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, cartSubTotal, AddQuantityToCart } from '../Action';
import { useNavigate } from "react-router-dom"; 

const Checkout = () => {
    let navigate = useNavigate();
    const location = useLocation();
    let productCloth = useSelector(state => state.clothsForSale);
    let productShoe = useSelector(state => state.ShoesForSale);
    const {_id, listName, design, image, price,description, availableQuantity,size} = location.state;  
    const relatedItem = listName === 'Cloths' ? productCloth : productShoe;
    const reverseItem = relatedItem.reverse();
    const  ProductsInCart = useSelector(state => state.ProductsInCart);
    const dispatch = useDispatch();
    const [toggleForm, setToggle] = useState(false);
    const [displaySizeError, setDisplaySizeError] = useState('');
    const [displaySize, setDisplaySize] = useState('');
    const [checkoutQuantity, setCheckoutQuantity] = useState(1);
    const [checkoutSubtotal, setcheckoutSubtotal] = useState(price);
    const [checkoutProduct, setcheckoutProduct] = useState({
      _id : '',
      image : '',
      design : '',
      price : '',
      subtotal : '',
      description : '',
      size : '',
      quantity : '',
      availableQuantity

    });
    const optionItems  = [];
    const sizeArray = size.split(',');

    useEffect(() => {
        setcheckoutSubtotal(price * checkoutQuantity)

        setcheckoutProduct({
            _id : _id,
            image : image,
            design : design,
            price : price,
            subtotal : checkoutSubtotal,
            description : description,
            size : displaySize,
            quantity : checkoutQuantity,
            availableQuantity
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[displaySize, checkoutQuantity])

    
    for(let i = 0; i < availableQuantity; i++ ){
        optionItems.push(i + 1)  
    }  

    const onclickSize = (e) => {
        setDisplaySize(e.target.value)
        setcheckoutProduct({
            ...checkoutProduct,
            size : e.target.value
          });
    }

    const onchangeQuantity = (e) => {
        setCheckoutQuantity(e.target.value)
        setcheckoutSubtotal(price * e.target.value)
        setcheckoutProduct({
                ...checkoutProduct,
                quantity : e.target.value,
                subtotal: price * e.target.value
              });

    }

    const toggleReview = () => {
        setToggle((prev) => !prev)
    }

    const addProductToCart = () => {
      if(  displaySize === '' ){

        setDisplaySizeError("please select size")
      }
      else{
    
        for(let i=0; i < ProductsInCart.length; i++){

          if(ProductsInCart[i]._id === checkoutProduct._id && ProductsInCart[i].size === checkoutProduct.size){
            navigate("/cart") 
            return;
                 }
        }
        dispatch(addToCart(checkoutProduct))
      dispatch (cartSubTotal(checkoutProduct.subtotal)) 
      dispatch(AddQuantityToCart(checkoutProduct.quantity))
      navigate("/cart")
      }
    }

  const viewProduct = (i) => {
    navigate('/checkout', {state: {
        _id : reverseItem[i]._id,
        image : reverseItem[i].image,
        design : reverseItem[i].design,
        price : reverseItem[i].price,
        subtotal : reverseItem[i].price,
        description : reverseItem[i].description,
        size : reverseItem[i].size,
        status : reverseItem[i].status,
        productType: reverseItem[i].productType,
        availableQuantity: reverseItem[i].availableQuantity,
        quantity : reverseItem[i].quantity,
        listName
      }});
    }

return (
    <div>
    <div className={checkout.container}>
    <div className={checkout.gridContainer}>
    <div className={checkout.gridItem1}> 
    <div className={checkout.productDisplay}>
        <div className={checkout.imageContainer}>
       <img src={image} alt="description of the product" />
        </div>
        <div className={checkout.productDetails}> 
        {/* <h3>{productType}</h3> */}
        <div className={checkout.design}>{design}</div>
        <div className={checkout.description}>{description}</div>
        <div className={checkout.availableQty}>
        <span>Available-Quantity: <span style={{color: "darkGreen", fontSize: "14px"}}>{' ' + availableQuantity}</span></span>
        </div>
        <div className={checkout.price}>N{price}</div>
        <div className={checkout.sizeSelected}> select size: {' ' + displaySize}</div>
        <div>
        {sizeArray.map((productsize, indexs) => 
         <button value={productsize} 
         key={indexs} 
         className={checkout.sizeButton}
         onClick={onclickSize}
          >
         {productsize}
         </button>)}
        </div>
        <div style={{color: 'red'}}>{displaySizeError}</div>

        <div className={checkout.quantity}> 
        <span>Quantity</span><br/>
        <select name="quantity" onChange = {onchangeQuantity}> 
       {
           optionItems.map((opt, ind)=> 
           <option value={opt} key={ind}>{opt}</option> 
           )
        }
        </select>
        </div>

        <div className={checkout.finalButtons}> 
        <button className={checkout.addToCart} onClick = {addProductToCart}>
        <span>Add to cart</span>
        </button>
        <button className={checkout.buyNow}>Buy Now</button>
        </div>

        </div>
    </div>
    
    <div className={checkout.headings}>Description</div>
    <div className={checkout.features}> 
    <div className={checkout.featuresHeader}>Key features</div>
    <ul>
    <li>it is made of pure leather</li>
    <li>an average life span of 5years</li>
    <li>comfortable to use</li>
    <li>allows for easy movement</li>
    </ul>
    </div>

    <div className={checkout.headings}>Shipping & Returns</div>
    <div className={checkout.features}> 
    <div className={checkout.featuresHeader}>Delivery/Shipping</div>
    <div>
    <span 
    style={{fontFamily: 'italics',
             fontWeight: 'lighter',
             color: 'grey'
    }}>
    Delivery takes-
    </span> 
    <span>48hrs for Lagos Customers</span>.<br/>
    <span 
    style={{fontFamily: 'italics',
             fontWeight: 'lighter',
             color: 'grey'
    }}>
    Orders outside Lagos-
    </span> 
    <span>Abuja, Portharcourt, Kano, Owerri</span>
    </div>

    <div className={checkout.featuresHeader} 
          style={{margin: '4% 0 1% 0'}}
    >
    Return Policy
    </div>

    <div> 
    <p>We currently have a returns policy of 7 days from the date of delivery 
    to return the product(s). If you are dissatisfied with any product you receive,
    you can request for a refund as long as it meets our conditions.
    </p>
    <p> 
    However please note that returns or replacements
    may not be available in the following cases:
    </p>
    <ul>
    <li>Damages due to misuse of product</li>
    <li>Any consumable which has been used or installed</li>
    <li>Products with tampered or missing serial number</li>
    <li>Any damage/defect which are not covered under the Manufacturers warranty</li>
    <li>Any product that is returned without all original packaging and accessories, 
        including the box, manufacturer'spackaging if any,
         and all other items originally included with the product(s) delivered
    </li>
    <li>Items with No Returns policy.</li>
    </ul>
    </div>
    </div>

    <div className={checkout.headings}>Reviews</div>
    <div className={checkout.features}> 
    <div className={checkout.featuresHeader}
         style={{display: 'flex',
                 flexDirection: 'row',
                paddingRight: '5%'
        }}
    >
    <span>Customer reviews</span>
    <div style={{flex: '1'}}></div>
    <button 
    className={checkout.reviewButton} 
    onClick={toggleReview}
    >
    {!toggleForm ? "write review" : "close review"}
    </button>
    </div>

    {toggleForm ?  <div>
        <div style={{fontSize: '23px', marginBottom: '2%', fontWeight: 'lighter'}}>Write a review</div>
        <div className={checkout.formDetails}>
        <div className={checkout.inputContainer}>
        <div>Name:</div>
        <input type="text" placeholder="enter your name" />
        </div>
        <div className={checkout.inputContainer}>
        <div>email:</div>
        <input type="email" placeholder="enter your email"/>
        </div>
        <div>
        <textarea> write your review</textarea>
        </div>

        <div>
            <button className={checkout.formButton}>submit review</button>
        </div>
        </div>
    </div> : ''}

    <div>
    <p className={checkout.reviewerName}>Osuji</p>
    <p className={checkout.comment}> it is a nice silk dress</p>
    </div>
    </div>

    </div>   

    <div className={checkout.gridItem2}>
        <div  className={checkout.benefitsContainer}>
        <div className={checkout.benefits}>
        <img src="https://img.icons8.com/ios/50/FF0000/delivery--v2.png" alt="deliuvery bus"/>
        <div className={checkout.benefitsItem}>
        <h2>Free Delivery</h2>
        <span>On Selected Items</span>
        </div>
        </div>

        <div className={checkout.benefits}>
        <img src="https://img.icons8.com/dotty/50/FF0000/thumb-up.png" alt="thumbs up"/>
        <div className={checkout.benefitsItem}>
        <h2>99% Customer</h2>
        <span>Feedbacks</span>
        </div>
        </div>

        <div className={checkout.benefits}>
        <img src="https://img.icons8.com/ios/50/FF0000/spinner-frame-2.png" alt="loader"/>
        <div className={checkout.benefitsItem}>
        <h2>7 Days</h2>
        <span>For free Exchange</span>
        </div>
        </div>

        <div className={checkout.benefits}>
        <img src="https://img.icons8.com/ios/50/FF0000/receive-cash.png" alt="cash payment"/>
        <div className={checkout.benefitsItem}>
        <h2>Payment</h2>
        <span>Cash on Delivery</span>
        </div>
        </div>

        <div className={checkout.benefits}>
        <img src="https://img.icons8.com/dotty/50/FF0000/best-seller.png" alt="best brand"/>
        <div className={checkout.benefitsItem}>
        <h2>Only Best</h2>
        <span>Brands</span>
        </div>
        </div>
        </div>

        <div style={{width: '100%'}}>
      <div style={{marginBottom: '4vh', marginTop: '20%'}}> 
      <img
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640735813/flash_sales_ghprzw.png'
          alt="fourth slide"
          width= '100%'
          height='300px'
        />
      </div>

      <div> 
      <img
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640735825/clearance_sale_wasoy3.jpg'
          alt="fifth slide"
          width= '100%'
          height='300px'
        />
        </div>
      </div>
    </div>   
    </div>
        
    </div>
    <div className="arrival-layout">
      <div className="arrivalName">
      <span className="categoryName">Related Items</span> 
      <div className="arrivalNameFlex"></div>
      <div className="clickForMoreDiv">
      <span className="clickForMore"> click for more </span>
      <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/10/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-15.png" alt="right arrow"/>
      </div>
      </div>

      {/* row for desktop view */}
      <div className='home-row-desktop'>
      <div className='grid-row'>
  
  {reverseItem.map((cloths, index) => 
     index < 5 ? <div key={index}
      className = "grid-row-items"> 
       <div>
       <div className="productImageContainer">
    <img src ={cloths.image} alt="cloths"  className='productImage'/>
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">N{cloths.price}</div>
    </div>

   <div className ='addToCart' 
    onClick ={()=> viewProduct(index) }> 
     View Product
     </div> 
  </div> : ''
   )
   }
    </div>  
    </div>

    {/* row for mobile view */}
<div className="home-row-mobile">
    <div className='grid-row'>
  
  {reverseItem.map((cloths, index) => 
     index < 4 ? <div key={index} 
      className = "grid-row-items"> 
       <div>
        <div className="productImageContainer">
    <img src ={cloths.image} alt="cloths" className='productImage' />
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">N{cloths.price} </div>
    </div>

    <div className ='addToCart'
     onClick ={()=> viewProduct(index)}> 
     View Product
     </div> 

          
  
  </div> : ''
   )
   }
    </div> 
    </div>
    </div>
    </div>
    
)
    }

export default Checkout;