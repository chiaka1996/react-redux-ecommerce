const ToggleProfileOrder = (state = true, action) => {
   
    switch(action.type){

         case 'TOGGLEBETWEENPROFILEANDORDER' :
             return action.payload
             
             default : 
             return state
     }
}

export default ToggleProfileOrder ;