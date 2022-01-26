import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useSelector} from 'react-redux';
import '../cssModules/Home.css';
import Banner from './Banner.js';
import { useNavigate } from "react-router-dom"; 

const Cloths = () => { 
 
    const navigate = useNavigate();
    const clothsForSale = useSelector (state => state.clothsForSale);

    const viewProduct = (i) => {
      navigate('/checkout', {state: {
        _id : clothsForSale[i]._id,
        image : clothsForSale[i].image,
        design : clothsForSale[i].design,
        price : clothsForSale[i].price,
        subtotal : clothsForSale[i].price,
        description : clothsForSale[i].description,
        size : clothsForSale[i].size,
        quantity : clothsForSale[i].quantity,
        status : clothsForSale[i].status,
        productType: clothsForSale[i].productType,
        availableQuantity: clothsForSale[i].availableQuantity,
        listName: 'Cloths'
      }});
    }


  return (
   <div>
  <div className="arrival-layout">
      <div  className='productBanner'>
      <Banner/>
      </div>
      {/* view for desktop */}
      <div style={{
        textAlign: 'center',
        padding: '1% 0',
        fontSize: '30px'
      }}>
      Cloths
      </div>
      <div className='cloth-row-desktop'>
       <div className='grid-row'>
  {clothsForSale.map((cloths, index) => 
      <div key={index}   className = "grid-row-items"> 
       <div className="productImageContainer">
    <img src ={cloths.image} alt="cloths" className='productImage'/>
    </div>
    <div className="tags">{cloths.design}</div>
    <div className="tags">N{cloths.price} </div>
    
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
  
  { clothsForSale.map((cloths, index) => 
     <div key={index}   className = "grid-row-items"> 
       <div className="productImageContainer">
    <img src ={cloths.image} alt="cloths" className='productImage'/>
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

export default Cloths;
