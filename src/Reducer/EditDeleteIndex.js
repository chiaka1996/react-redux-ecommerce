const EditDeleteProductIndex = (state = null, action) => {
   
    switch(action.type){

         case 'EDITDELETEPRODUCTINDEX' :
             return action.payload
             
             default : 
             return state
     }
}

export default EditDeleteProductIndex;