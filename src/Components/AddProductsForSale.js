/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
 import React, {useState, useEffect} from 'react';
 import {useSelector, useDispatch } from 'react-redux';
 import { addClothForSale, addShoesForSale } from '../Action'; 
 import axios from 'axios';
 import '../App.css';
 import AdminNav from './AdminNav';
 import { useHistory } from "react-router-dom";


 const AddProductForSale = () => {

    const history = useHistory();
    let loginCheck = useSelector(state => state.AdminLogin);
    const dispatch = useDispatch();

    const EditIndex = useSelector(state => state.EditDeleteProductIndex);

    const clothsforsale = useSelector(state => state.clothsForSale);
    const shoesforsale = useSelector(state => state.ShoesForSale);
    const editproductvalue = useSelector(state => state.EditProductValue);

    const products = editproductvalue === 'cloths' ? clothsforsale : shoesforsale ;

    const [image, setImage] = useState(EditIndex != null ? products[EditIndex].image : ''); 

    const [design, setDesign] = useState(EditIndex != null ? products[EditIndex].design : '');

    const [price, setPrice] = useState(EditIndex != null ? products[EditIndex].price : '');

    const [availableQuantity, setAvailableQuantity] = useState(EditIndex != null ? products[EditIndex].availableQuantity : '');

    const [message, setMessage] = useState('');

    const quantity = 1;

    const [description, setDescription] = useState(EditIndex != null ? products[EditIndex].description : '');

    const [size, setSize] = useState(EditIndex != null ? products[EditIndex].size : '');

    const [productType, setType] = useState(EditIndex != null ? products[EditIndex].type : '');

    // console.log(image);

    const getProduct = async () => {
        let res = await axios.get("https://protected-retreat-10926.herokuapp.com/apis/get_products");
    let { data} = res;
    dispatch(addClothForSale(data))

    }

    const shoeProduct = async () => {
        let response = await axios.get("https://protected-retreat-10926.herokuapp.com/apis/getshoeproduct");
   let { data} = response;
   dispatch(addShoesForSale(data));
    }

    useEffect (
         () => {
         getProduct();
         shoeProduct();
        },[message]);

    //if the input changes
    const onchangeImage = (e) => {
        setImage(e.target.value);
        setMessage('');
    };

     const onchangeDesign = (e) => {
        setDesign(e.target.value);
        setMessage('');
     };

     const onchangePrice = (e) => {
        setPrice(e.target.value);
        setMessage('');
     };

     const onchangeDescription = (e) => {
         setDescription(e.target.value);
         setMessage('');
     }

     const onchangeSize = (e) => {
         setSize(e.target.value);
         setMessage('');
     }

    const onchangeAvailable = (e) => {
        setAvailableQuantity(e.target.value);
        setMessage('');
    }

     const onchangeType  = (e) => {
        setType(e.target.value);
        setMessage('');
     }

     //when we click the submit button
     const submit = (e) => {
         let data;

    e.preventDefault();

    if(EditIndex != null) {
        data = {
            _id : products[EditIndex]._id,
            image,
            design,
            price,
            size,
            productType,
            quantity,
            availableQuantity,
            description 
        }
    } else {
        data = {
            image,
            design,
            price,
            productType,
            size,
            quantity,
            availableQuantity,
            description
        }
    }

    if(EditIndex != null){
        
        if(productType === 'cloths'){
            axios.put('https://protected-retreat-10926.herokuapp.com/apis/editproduct', data)
        .then(
            (res) => {
                setMessage(res.data.message);
            
            }
        )
        }
        else{
            axios.post('https://protected-retreat-10926.herokuapp.com/apis/editshoeproduct', data)
            .then(
                (res) => {
                    setMessage(res.data.message);
                
                }
            )
        }
        
    }
    else{

        if(productType =='shoes'){

            axios.post('https://protected-retreat-10926.herokuapp.com/apis/addShoeproduct', data)
        .then(
            (res) => {
                setMessage(res.data)
            }
        )
    
        }
  
        else{
            
            axios.post('https://protected-retreat-10926.herokuapp.com/apis/add_product', data)
        .then(
            (res) => {
                setMessage(res.data)
            }
        ) 
        }
             
    }

    setImage('');
    setType('');
    setAvailableQuantity('');
    setSize('');
    setDescription('');
    setPrice('');
    setDesign('');

     }


    return  <div>

            {loginCheck ?
             <div>please, return to 
            <span style={{color:'lightgreen'}} onClick={()=>history.push('/adminHome')}>Admin Home</span> and login</div> :
            <div>
        <AdminNav name="exit" color='red' link='/adminHome' />
        <div className="productForm">
            <div style={{color :'green'}}>{message}</div>
        <form>
            <div className='row'>

            <div className = "col-sm-3">
               <label>Product type</label><br/>
            <select max-width='100%' name='type' value={productType} onChange={onchangeType} required>
                <option></option>
                <option value='cloths' >cloths</option>
                <option value='shoes'>shoes</option>
            </select>
             </div> <br/> 


            <div className = "addImage col-sm-3">
               <label>Add image url</label><br/>
            <input type="text" name="image" value={image} onChange = {onchangeImage} required/>
             </div> <br/> 

            <div className="col-sm-3">
            <label>Name Of Product</label>
            <input type="text" className = "inputs" value={design} name = "design" onChange = {onchangeDesign} required/>
            </div>

            <div className="col-sm-3">
            <label>Price</label>
            <input type="number" className = "inputs" value={price} name = "price" onChange = {onchangePrice} required/>
            </div><br/>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <label>Size</label><br />
                    <input type="text" name="size" value={size} onChange = {onchangeSize}  required/>
                </div>

                <div className='col-sm-4'>
                    <label>Available Quantity</label>
                    <input type="number" name="availableQuantity" value={availableQuantity} onChange = {onchangeAvailable} required />
                </div><br/>

                <div className='col-sm-4'>
                <textarea id = "myTextArea" rows = "3" cols = "50" value={description} name="description" onChange={onchangeDescription} required>Description</textarea>
                </div>
            </div>
            <button type="submit" className="submitButton"  onClick = {submit} > {EditIndex != null ? 'Update Product' : 'Enter Product'}</button>
        </form>
            </div>
            </div>
            }
        </div>
    
 } 

 export default AddProductForSale;