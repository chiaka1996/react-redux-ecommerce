import React from 'react';
import '../cssModules/AdminHome.css';



function AdminLogin() {
  return (
    <div className="adminBody">
    <div className="adminLoginbody">
         <header>Admin Login</header>
        <form>
                <label> Email</label><br/>
                <input type="email" name="email"  placeholder="chikajunior19@gmail.com" /> <br/>

                <label>Password</label><br />
                <input type="password" name="password" /><br/>

                <button><span>Login</span></button><br/>
            </form>

    </div>
    </div>
  );
}

export default AdminLogin;