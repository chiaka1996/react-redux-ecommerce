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
import userProfile from './Components/Userprofile';
import AllOrders from './Components/AllOrders';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addClothForSale, addShoesForSale } from './Action'; 
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple} from '@fortawesome/free-brands-svg-icons'
import {faCartPlus, faUser, faBars, faHome, faShoePrints, faTshirt, faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons'

library.add(faApple, faCartPlus, faUser, faBars, faHome, faShoePrints, faTshirt, faTrashAlt, faPen);

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
        <SideBar sidebar={sidebartoggle}  />
        <Route path = "/" exact component = {Home} />
        <Route path = "/cloths" component = {Cloths}/>
        <Route path="/auth" component={Auth} />
        <Route path = "/shoes" component = {Shoes}/>
        <Route path = "/cart" component = {Cart}/>
        <Route path = "/addforsale" component = {AddForSale} />
        <Route path = "/adminHome" component = {AdminHome} />
        <Route path = "/userprofile" component = {userProfile} />
        <Route path = "/allorders" component ={AllOrders} />
      </div>
    </Router>
  
  );
}

export default App;
