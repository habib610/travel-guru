import React, { useState } from 'react';
import './Login.css';
import { Container, Row } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
firebase.initializeApp(firebaseConfig);









const Login = () => {
    const [user, setUser] = useState({
        isSigned: false,
        name: "",
        email: "",
        password: '',
        confirmPassword: '',
        error: '',
        success: '',
      });







 

    // Sign in with Google 
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn =() =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(  result=> {
        const {displayName, email} = result.user;
        const signedUser = {
            isSigned: true,
            name: displayName,
            email: email,
          };
          setUser(signedUser);
          }).catch( error => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }


// form Field validation 
const getUserInformation =(e)=>{
    let fieldValid = true;
    let password;
    let confirmPassword;

  if(e.target.name ==='email'){
    fieldValid =/\S+@\S+\.\S+/.test(e.target.value);
  }
  if(e.target.name ==='password'){
    const passWordLength = e.target.value.length >= 6;
    const passHasNumber =  /\d{1}/.test(e.target.value);
    fieldValid = passHasNumber && passWordLength; //false
    password = e.target.value;
  }

  if(e.target.name ==='confirmPassword'){
    confirmPassword = e.target.value;
    fieldValid = password === confirmPassword;
  }
  if(fieldValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
  }



////Lefting not new user>>>>>>>>>>>>>



// form validation 
const handleSubmit =(e)=>{
 

    e.preventDefault();
  }


  


    return (
        <div className="login">
            <Container>
         
    <h1 className="text-dark">Name: {user.name}</h1>
            <form action="" onClick={handleSubmit}>
            <h2>Create an account</h2>
            <input type="text" name="firstName" required  placeholder="First Name"/>
            <input type="text" name="lastName" required  placeholder="Last Name"/>
            <input type="email" onBlur ={getUserInformation} name="email" required placeholder="Username or Email"/>
            <input type="password" name="password" required placeholder="Password"/>
            <input type="password" name="confirmPassword" required placeholder="Confirm Password"/>
            <input type="submit" value="Submit"/>
            <p><small className="text-dark">All ready Have an account?</small> <span>Login</span></p>
            </form>
        
            </Container>
            <Row className="alternative">
                <div className="line"></div>
                <p>Or</p>
                <div className="line"></div>
            </Row>
           <Row>
               <div>
                   <div  className="alternateBtn">
                       <img src="https://iili.io/2xnVVe.png" alt=""/>
                       <p>Continue with Facebook</p>
                   </div>

                   <div onClick={handleGoogleSignIn} className="alternateBtn">
                       <img src="https://iili.io/2xnMx9.png" alt=""/>
                       <p>Continue with Google</p>
                   </div>
               </div>
           </Row>
           <Row>
               <p className="text-success my-2">what</p>
           </Row>
        </div>
    );
};

export default Login;