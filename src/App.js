/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Cloths from './Components/Cloths';
import Shoes from './Components/Shoes'; 
import Home from './Components/Home';  
import Cart from './Components/Cart';
import SideBar from './Components/SideBar';
import AddForSale from './Components/AddProductsForSale'; 
import AdminHome from './Components/AdminHome';
import Auth from './Components/Authentication';
import UserProfile from './Components/Userprofile';
import Newsletter from './Components/Newsletter';
import AllOrders from './Components/AllOrders';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';
import Nav from './Components/Nav';
import Profiledetails from './Components/Profiledetails';
import Changepassword from './Components/ChangePassword';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addClothForSale, addShoesForSale } from './Action'; 
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faBars, faTrashAlt, faPen, faEnvelope} from '@fortawesome/free-solid-svg-icons'

library.add(faApple, faEnvelope, faBars, faTrashAlt, faPen, faFacebookF, faTwitter, faInstagram);

function App() {
  const sidebartoggle = useSelector(state => state.SideBarToggle);
  const dispatch = useDispatch();

  //get cloth products for sale from the database
  const getClothProduct = async () => {
    let res = await axios.get("https://protected-retreat-10926.herokuapp.com/apis/get_products");
    let { data} = res;
    dispatch(addClothForSale(data));
}

//get shoe products
const getShoeProduct = async () => {

   let response = await axios.get("https://protected-retreat-10926.herokuapp.com/apis/getshoeproduct");
   let { data} = response;
   dispatch(addShoesForSale(data));
}

  useEffect(
    () => {
      getClothProduct();
      getShoeProduct();

    },[]);
  
  return (
    <Router>
      
      <div className ="body">
        <Nav />     
        <SideBar sidebar={sidebartoggle}/>
        <Routes>
        <Route path = "/" exact element = {<Home />} />
        <Route path = "/cloths" element = {<Cloths />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path = "/shoes" element = {<Shoes />}/>
        <Route path = "/cart" element = {<Cart />}/>
        <Route path = "/checkout" element = {<Checkout />} />
        <Route path = "/addforsale" element = {<AddForSale />} />
        <Route path = "/adminHome" element = {<AdminHome />} />
        <Route path = "/profile" element = {<UserProfile />} />
        <Route path = "/allorders" element ={<AllOrders />} />
        <Route path = "/profile/details" element = {<Profiledetails />} />
        <Route path = "/profile/change_password" element = {<Changepassword />} />
        <Route path = "/profile/newsletter" element = {<Newsletter />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
