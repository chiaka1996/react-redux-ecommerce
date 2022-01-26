import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import '../cssModules/Home.css';
import Banner from './Banner.js';
import { useNavigate } from "react-router-dom"; 

const Shoes = () => {
 
    const navigate = useNavigate();
    const shoesForSale = useSelector (state => state.ShoesForSale);
    
    const viewProduct = (i) => {
      navigate('/checkout', {state: {
        _id : shoesForSale[i]._id,
        image : shoesForSale[i].image,
        design : shoesForSale[i].design,
        price : shoesForSale[i].price,
        subtotal : shoesForSale[i].price,
        description : shoesForSale[i].description,
        size : shoesForSale[i].size,
        quantity : shoesForSale[i].quantity,
        status : shoesForSale[i].status,
        productType: shoesForSale[i].productType,
        availableQuantity: shoesForSale[i].availableQuantity,
        listName: 'Shoes'
      }});
    }

  return (
   <div>
  <div className="arrival-layout">
    <div className="productBanner">
      <Banner />
    </div>
      {/* view for desktop */}
      <div style={{
        textAlign: 'center',
        padding: '1% 0',
        fontSize: '30px'
      }}>
      Shoes
      </div>
      <div className='cloth-row-desktop'>
       <div className='grid-row'>
  
  {shoesForSale.map((cloths, index) => 
      <div key={index}   className = "grid-row-items"> 
       <div className="productImageContainer">
    <img src ={cloths.image} alt="cloths" className="productImage" />
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">{cloths.price} </div>
    
    <div className='addToCart' 
      onClick ={ () => viewProduct(index) }>
          View Product
    </div> 
    
          
  
  </div>
   )
   }
    </div>   
    </div>

    {/* view for mobile */}
    <div className='cloth-row-mobile'>
    <div className='grid-row'>
  
  { shoesForSale.map((cloths, index) => 
     <div key={index}   className = "grid-row-items"> 
       <div className="productImageContainer">
    <img src ={cloths.image} alt="shoes" className="productImage" />
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">N{cloths.price} </div>
  
    <div className ='addToCart' 
     onClick ={()=> viewProduct(index)}> 
     View Product
     </div> 

          
  
  </div> 
   )
   }
    </div>
    </div>  

</div>
    </div> 
  );
}

export default Shoes;

