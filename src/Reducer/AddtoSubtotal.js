/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
const CartSubTotal = (state = [], action) => {
   
    switch(action.type){

         case 'CARTSUBTOTAL' :
             return [
                ...state,
                 action.payload
             ]

             case 'REMOVEALLPRODUCTSFROMCART' : 
             state.splice(action.payload);
             return state;


             case 'UPDATESUBTOTAL' :
             // eslint-disable-next-line array-callback-return
             let subState = state.map((sub, index) => {

            if(action.payload2 === index)  {

                if(action.payload == '' || action.payload <= 0){
                    return action.payload3 * 1
                }
                    return  action.payload3 * action.payload 
                }

                return sub
                   
             });

             return subState
             
             case 'DELETEFROMCART' :
                    state.splice(action.payload, 1);
                    return state

             default : 
             return state
     }
}

export default CartSubTotal;