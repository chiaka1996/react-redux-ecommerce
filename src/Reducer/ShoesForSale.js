const ShoesForSale = (state = [], action) => {
   
    switch(action.type){

         case 'ADDSHOESFORSALE' :
             return action.payload
             
             default : 
             return state
     }
}

export default ShoesForSale;