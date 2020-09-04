
const clothsForSale = (state = [], action) => {
   
    switch(action.type){

         case 'ADDPRODUCTFORSALE' :
             return action.payload
             
             default : 
             return state
     }
}

export default clothsForSale;