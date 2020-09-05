const DeleteMessage = (state = '', action) => {
   
    switch(action.type){

         case 'UPDATEDELETEMESSAGE' :
             return action.payload
             
             default : 
             return state
     }
}

export default DeleteMessage;