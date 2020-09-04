/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
const CartQuantities = (state = [], action) => {
   
    switch(action.type){    

            case 'INITIALQUANTITY' :
                    return [
                        ...state,
                         action.payload
                     ]

            case 'REMOVEALLPRODUCTSFROMCART' :
                     state.splice(action.payload);
                     return state;


            case 'UPDATEQUANTITY' :

            let updatedState = state.map((quantity, index) => {
                
                if(action.payload == '' || action.payload <= 0 ){
                    return 1
                }

                if(action.payload2 == index) {
                    return 1 * action.payload;
                }
                else{
                    return quantity;
                }
                
            })

            return updatedState

            case 'DELETEFROMCART' :
                    state.splice(action.payload, 1);
                    return state
                     
             default : 
             return state
     }
}

export default CartQuantities;