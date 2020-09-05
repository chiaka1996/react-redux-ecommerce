const EditProductvalue = (state = '', action) => {
   
    switch(action.type){

         case 'SETEDITPRODUCTVALUE' :
             return action.payload
             
             default : 
             return state
     }
}

export default EditProductvalue;