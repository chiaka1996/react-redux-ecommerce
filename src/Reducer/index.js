import ProductsInCart from './ProductsInCart';
import clothsForSale from './clothsForSale';
import AddtoSubtotal from './AddtoSubtotal';
import ManageCartQuantity from './ManageCartQuantity';
import SideBarToggle from './SideBarToggle';
import EditDeleteProductIndex from './EditDeleteIndex';
import LoginUsers from './LoginUsers';
import LoginProfile from './LoginProfile';
import ToggleProfileOrder from './ToggleProfileOrder.js';
import ShoesForSale from './ShoesForSale.js';
import EditProductvalue from './EditProductvalue.js';
import AdminLogin from './AdminLogin.js'
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    AddtoSubtotal,
    ProductsInCart,
    clothsForSale,
    ManageCartQuantity,
    SideBarToggle,
    EditDeleteProductIndex,
    LoginUsers,
    LoginProfile,
    ToggleProfileOrder,
    ShoesForSale,
    EditProductvalue,
    AdminLogin
}); 

export default allReducers;