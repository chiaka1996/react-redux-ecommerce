import React,{useState, useEffect} from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
const AllOrders = () => {
    
    const history = useHistory();
    let loginCheck = useSelector(state => state.AdminLogin);
    const [allOrders, setAllOrders] = useState([]);
    const [enableRefresh, setEnableRefresh] = useState(false);
    
    const getAllOrders = async() => {
        let res = await axios.get("https://protected-retreat-10926.herokuapp.com/apis/getallorders");
        console.log(res.data);
        setAllOrders(res.data);
    
    }

    useEffect(()=>{
        getAllOrders();
    },[enableRefresh]);

    const onchangeStatus = async(prod) => {
        let updatestatus = {
            _id : prod._id,
            username : prod.username,
            firstname : prod.firstname,
            lastname : prod.lastname,
            phone : prod.phone,
            address : prod.address,
            total : prod.total,
            status: !prod.status,
            order : prod.order
        }

        let res = await axios.post("https://protected-retreat-10926.herokuapp.com/apis/updatestatus", updatestatus);
        console.log(res.data);
        setEnableRefresh((prev) => !prev);
    }

    return (
        <div>
            {loginCheck ?
             <div>please, return to 
            <span style={{color:'lightgreen'}} onClick={()=>history.push('/adminHome')}>Admin Home</span> and login</div> :
            <div>
            <AdminNav name='exit' color='blue' link='/adminHome' />
            <table className="table table-bordered table-dark" style={{maxWidth:'100%'}}>
               <thead>
                   <tr>
                       <th></th>
                       <th>username</th>
                       <th>fullname</th>
                       <th>Orders</th>
                       <th>addresss</th>
                       <th>phone</th>
                       <th>Total</th>
                       <th>date</th>
                       <th>status</th>
                   </tr>
               </thead>
    
               <tbody>
                {allOrders.map((ord,i) => 
                <tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{ord.username}</td>
                    <td><span>{ord.firstname}</span> <span>{ord.lastname}</span> </td>
                    <td>
                        <tr>
                            <th>image</th>
                            <th>quantity</th>
                            <th>design</th>
                            <th>subtotal</th>
                        </tr>

                            {ord.order.map((ords) => 
                                 <tr>
                                <td><img src={ords.image} alt='ordered product' width='60%' height='40%' /></td>
                                <td>{ords.quantity}</td>
                                <td>{ords.design}</td>
                                <td>{ords.subtotal}</td>
                                </tr>
                                )}

                    </td>

                    <td>{ord.address}</td>
                    <td>{ord.phone}</td>
                    <td>{ord.total}</td>
                    <td>{ord.createdAt}</td>
                    <td><input type='checkbox' value={ord.status} checked={ord.status} onChange={()=>onchangeStatus(ord)}  /></td>
                </tr>
                )}
               </tbody>

             </table>
             </div>
            }
        </div>
    )
}

export default AllOrders;