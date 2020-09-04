const LoginUsers = (state = {}, action) => {
   
    switch(action.type){

         case 'USERPROFILE' :
             return action.payload
             
             default : 
             return state
     }
}

export default LoginUsers;