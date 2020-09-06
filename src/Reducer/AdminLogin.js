const AdminLogin = (state = true, action) => {
   
    switch(action.type){

         case 'CHECKIFTHEADMINISLOGGEDIN' :
             return action.payload
             
             default : 
             return state
     }
}

export default AdminLogin;