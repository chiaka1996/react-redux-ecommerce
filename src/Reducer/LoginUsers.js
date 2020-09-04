const LoginUsers = (state = false, action) => {
   
    switch(action.type){

         case 'CHECKIFUSERISLOGGEDIN' :
             return action.payload
             
             default : 
             return state
     }
}

export default LoginUsers;