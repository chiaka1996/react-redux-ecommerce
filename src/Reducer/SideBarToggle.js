const Sidebartoggle = (state = false, action) => {
   
    switch(action.type){

         case 'SIDEBARTOGGLE' :
             return action.payload
             
             default : 
             return state
     }
}

export default Sidebartoggle;