/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
const ProductsInCart = (state = [], action) => {
   
    switch(action.type){

         case 'ADDTOCART' :
             return [
                ...state,
                action.payload
            ]

            case 'REMOVEALLPRODUCTSFROMCART' :
                state.splice(action.payload);
                return state;

            case 'UPDATEPRODUCTINCARTQUANTITY' :           

            let updateQuantity = state.map((products, index) => {
                
                return {
                    ...products,
                    quantity : index === action.payload ? 
                    
                    action.payload2 > 0 ? 1 * action.payload2 : products.quantity
                    
                    : products.quantity,

                    subtotal : index === action.payload ? 
                    
                    action.payload2 > 0 ? products.price * action.payload2 : products.subtotal
                    
                    : products.subtotal

                }
                
            })
               
            return updateQuantity;

            case 'DELETEFROMCART' :
                state.splice(action.payload, 1);
                return state

             default : 
             return state
     }
}

export default ProductsInCart;
