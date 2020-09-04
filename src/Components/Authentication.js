/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import auth from '../cssModules/Authentication.module.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { LoginCheck, LoginProfile} from '../Action';
import axios from 'axios';
import Nav from './Nav';

 
const Authentication = () => {

    let history = useHistory();
    const dispatch = useDispatch();

    const nameRegex = /^[a-z ?a-z]+/gi;

    const stateRegex = /^[a-z]+/gi
    const lastRegex = /^[a-z ?a-z]+/gi;
    const userRegex = /^[a-z]+[0-9]*/gi;
    const addressRegex = /[0-9]*[a-z]+/gi;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    //state to change display from login to createAccount
    const [authView, setAuthView] = useState(true);

    const [errorMessage, setErrorMessage] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [successMessage, setSuccessMessage] = useState('');

    const [loginDetails, setLoginDetails] = useState({
        email : '',
        password : ''
    });

    const [signupDetails, setSignupDetails] = useState({
        firstname : '',
        lastname : '',
        username : '',
        phone : '',
        email : '',
        state : '',
        address : '',
        password : ''
    });


    const onchangeLoginDetails = (e) => {
        setErrorMessage([]); 
        const value = e.target.value;
        const name = e.target.name;

        setLoginDetails({
            ...loginDetails,
            [name] : value
        });
    }

    const onchangeSignupDetails = (e) => {
        setErrorMessage([]);
        const value = e.target.value;
        const name = e.target.name;

        setSignupDetails({
            ...signupDetails,
            [name] : value
        });
    }
    
    
    const changeView= () => {
        setAuthView((prevState) => !prevState);
        setErrorMessage([]);
        setShowModal(false);
        setSuccessMessage('');
    }


    const submitLoginDetails = (e) => {
        e.preventDefault();
        
        const {email, password} = loginDetails;

        let emailTest = emailRegex.test(email);

        setErrorMessage([]);

        setSuccessMessage('');

        if(!email || !password) {
            setErrorMessage((prevState) => [...prevState, 'please fill all fields']);
        }
        else{

            if(emailTest === false || password.length < 7) {

                if (emailTest === false) {
                    console.log(emailTest);
                    setErrorMessage((prevState)=>[...prevState, "invalid email"]);
                }

                if (password.length < 7){
                    setErrorMessage((prevState)=>[...prevState, "invalid password"]);
                    
                } 
                    }

            else {

                axios.post('https://protected-retreat-10926.herokuapp.com/apis/loginUser', loginDetails)
                .then(
                    (res) => {
                        
                        if(res.status === 201){
                             const {data : {message}} = res;
                            setErrorMessage((prevState)=>[...prevState, message]);
                            
                        }
                       
                        else{
                        const {data} = res;
                        setSuccessMessage(data.message);
                        setShowModal((prevState) => !prevState)
                        dispatch(LoginCheck(true));
                        dispatch(LoginProfile(data))
                        
                        }
                    }
                );              
            }          
        }
    }


    const submitSignupDetails = (e) => {

        e.preventDefault();

        setErrorMessage([]);

        setSuccessMessage('');

        const {firstname, lastname, username, phone, email, state, address, password} = signupDetails;

        let nameTest = nameRegex.test(firstname);
        let userTest = userRegex.test(username);
        let lastTest =  lastRegex.test(lastname);
        let stateTest =  stateRegex.test(state);
        let addressTest =  addressRegex.test(address);
        let emailTest =  emailRegex.test(email);

        if(!firstname || !lastname || !phone || !username || !email || !state || !address || !password) {
            setErrorMessage((prevState)=> [...prevState, "please fill all fileds"]);        
        }
        else{

            if( !nameTest || password.length < 7 || !userTest || username.length > 7 || username.length < 3 || !lastTest || !stateTest|| state.length < 3 || !addressTest || !emailTest) {

            if(!nameTest){
                setErrorMessage((prevState)=>[...prevState, "invalid firstname"]);
                
            }

          if(!nameTest || username.length > 7 || username.length < 3) {
                setErrorMessage((prevState)=>[...prevState, "invalid username"]);
            }

         if(!lastTest) {
                setErrorMessage((prevState)=>[...prevState, "invalid Lastname"]);
            }


             if(!stateTest || state.length < 3) {
                setErrorMessage((prevState)=>[...prevState, "invalid state name"]);
            }

         if(!addressTest){
                setErrorMessage((prevState)=>[...prevState, "invalid address name"]);
            }
            
            if(!emailTest){
                setErrorMessage((prevState)=>[...prevState, "invalid email"]);
            }
         

          if(password.length < 7){
             setErrorMessage((prevState)=>[...prevState, "password should be 7 or more characters"]);
             }

            }
            else {
            
                axios.post('https://protected-retreat-10926.herokuapp.com/apis/registerUser', signupDetails)
                .then(
                 (res) => {
                
                if(res.status === 201){
                        const {data : {errorArray}} = res;
                    setErrorMessage((prevState)=>[...prevState, ...errorArray]);
                    
                }
                
                else{

                const {data} = res;
                setSuccessMessage(data);
                setShowModal((prevState) => !prevState);
                
                }
            }
        );              
    }    
}

    }

    return (
        <div>
        <Nav />
<div className={auth.authbody}>
        {/* ternary operator to change display from login to create account */}
    { authView ? 
    /* login form */
    <div className={auth.loginbody}>
            <header>Login</header>

            <div className={auth.errorMessage}>       
            {errorMessage.map((error, i) => <p key={i}>{error}</p>)}
            </div>

            <form>
                <label> Email</label><br/>
                <input type="email" name="email"  placeholder="chikajunior19@gmail.com" onChange={onchangeLoginDetails} /> <br/>

                <label>Password</label><br />
                <input type="password" name="password" onChange={onchangeLoginDetails} /><br/>

                <button onClick={submitLoginDetails}>Login</button><br/>
                <div>don't have an account ? <span onClick = {changeView}>create account</span></div>
            </form>

            <Modal show={showModal} onHide={() => false} keyboard={false} backdrop="static" centered>
                <ModalBody>
                {successMessage } <span onClick={() => history.goBack()} className={auth.modalLogin}>continue</span> shopping
                </ModalBody>
            </Modal> 

    </div>
        :
    /* registration form  */
        <div className={auth.createAccountBody}>
            <header>Create Account</header>

            <div className={auth.errorMessage}>
                
                    {errorMessage.map((error, i) => <p key={i}>{error}</p>)}
                
            </div>

            <form>

                <label>First Name</label><br/>
                <input type="text" name="firstname" placeholder="chioma" onChange={onchangeSignupDetails} /><br/>

                <label>Last Name</label><br/>
                <input type="text" name="lastname" placeholder="Adekunle" onChange={onchangeSignupDetails} /><br/>

                <label>Username</label><br/>
                <input type="text" name="username" placeholder="chi21" onChange={onchangeSignupDetails} /><br/>


                <label>Phone Number</label><br/>
                <input type="number" name="phone" placeholder="07085408623" onChange={onchangeSignupDetails} /><br/>

                <label>Email</label>
                <input type="email" name="email" placeholder="chikajunior19@gmail.com" onChange={onchangeSignupDetails} /><br/>


                <label>State</label>
                <input type="text" name="state" placeholder="Lagos" onChange={onchangeSignupDetails} /><br/>

                <label>Home Address</label>
                <input type="text" name="address" placeholder="1, adeniran street,yaba, Lagos" onChange={onchangeSignupDetails} /><br/>

                <label>Password</label><br/>
                <input type="password" name="password" placeholder="should be 7 or more characters" onChange={onchangeSignupDetails} /><br/>

                <button onClick={submitSignupDetails}>Create Account</button><br/>
                <div>Already have an account? <span onClick={changeView}>Login</span></div>
            </form>

             <Modal show={showModal} onHide={() => false} keyboard={false} backdrop="static" centered>
                <ModalBody>
                    {successMessage} proceed to <span onClick={changeView} className={auth.modalLogin}>Login</span> page
                </ModalBody>
            </Modal> 
            
        </div>
    }

</div>
</div>
    )
}

export default Authentication;