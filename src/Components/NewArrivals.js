import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import '../cssModules/Home.css';
import { useNavigate } from "react-router-dom"; 


const NewArrival = (props) => { 
 
      let navigate = useNavigate();
      let productCloth = useSelector(state => state.clothsForSale);
      let productShoe = useSelector(state => state.ShoesForSale);
      const Cloths = props.name === 'Cloths' ? productCloth: productShoe;

    // this function links to the checkout page and displays the products.
    const viewProduct = (i) => {
      
      navigate('/checkout', {state: {
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
        quantity : Cloths[i].quantity,
        listName: props.name
      }});
    }

  return (  
  <div className="arrival-layout">
      <div className="arrivalName">
      <span className="categoryName">{props.name}</span> 
      <div className="arrivalNameFlex"></div>
      <div className="clickForMoreDiv">
      <span className="clickForMore"> click for more </span>
      <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/10/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-15.png" alt="right arrow"/>
      </div>
      </div>

      {/* row for desktop view */}
      <div className='home-row-desktop'>
      <div className='grid-row'>
  
  {Cloths.map((cloths, index) => 
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
  
  {Cloths.map((cloths, index) => 
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
  );
}

export default NewArrival;