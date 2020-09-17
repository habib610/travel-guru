import React, { useContext, useState } from 'react';
import './Login.css';
import { Container, Row } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);







const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);}
    const [user, setUser] = useState({
        isSigned: false,
        name: "",
        email: "",
        password: '',
        confirmPassword: '',
        error: '',
        success: '',
      });

      let history = useHistory();
      let location = useLocation();
    
      let { from } = location.state || { from: { pathname: "/" } };





 

    // Sign in with Google 
    var fbProvider = new firebase.auth.FacebookAuthProvider();
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
          setLoggedInUser(signedUser)
          history.replace(from)
          }).catch( error => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }



const getUserInformation =(e)=>{
    let fieldValid = true;
 

//   if(e.target.name ==='email'){
//     fieldValid =/\S+@\S+\.\S+/.test(e.target.value);
//     console.log("email valid" +fieldValid)
//   }
  if(e.target.name ==='password'){
    const passWordLength = e.target.value.length >= 6;
    const passHasNumber =  /\d{1}/.test(e.target.value);
    fieldValid = passHasNumber && passWordLength;
  }

  if(e.target.name ==='confirmPassword'){

let password = document.getElementById('password').value;
let confirmPassword = document.getElementById('confirmPassword').value;

if(password !== confirmPassword){
    alert("Enter Correct Password")
}

  }

  if(fieldValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo)

  }
  }



////Lefting not new user>>>>>>>>>>>>>
const [newUser, setNewUser] = useState(true)





 // form submitting 
 const handleSubmit =(e)=>{
    if(user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          const newUserInfo = {...user};
          newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
            updateUserInfo(user.name)
        })
        .catch(function(error) {
          // Handle Errors here.
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
            history.replace(from)
          // ...
        });
    }
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user};
          newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
            console.log("signed in user ", res.user)
        })
        .catch(function(error) {
          // Handle Errors here.
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
        });
      }
    e.preventDefault();
  }

//   User info updating 

const updateUserInfo =(name) =>{
    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
}).then(function() {
  console.log("user name updated successfully")
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  }
  const hideShowField=() =>{
    setNewUser(!newUser);
}


// facebook log in 

const handleFSignIn =()=>{
    firebase.auth().signInWithPopup(fbProvider)
    .then(function(result) {
        const {displayName, email} = result.user;
        console.log(displayName,email)
      const signedUser = {
          isSigned: true,
          name: displayName,
          email: email,
      // ...}
    }
    setLoggedInUser(signedUser)
    history.replace(from)
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
    return (
        <div className="login">
            <Container>
         

            <form action="" onSubmit={handleSubmit}>
          {newUser &&  <h2>Create an account</h2>}
          {!newUser &&  <h2>Login</h2>}
           {newUser && <input type="text" name="firstName" required  placeholder="First Name"/>}
          {newUser &&  <input type="text" name="lastName" required  placeholder="Last Name"/>}
            <input type="email" onBlur={getUserInformation} name="email" required placeholder="Username or Email"/>

           {newUser && <input type="password" id="password"  onBlur={getUserInformation} name="password" required placeholder="Password"/>}

           {!newUser && <input type="password"  onBlur={getUserInformation} name="password" required placeholder="Type Password"/>}

          {newUser &&  <input type="password" id="confirmPassword"  onBlur={getUserInformation} name="confirmPassword" required placeholder="Confirm Password"/>}

            <input type="submit" value={newUser ?"Sign in":"Log in"}/>
            <p className="toggle" onClick={hideShowField}><small className="text-dark">All ready Have an account?</small> <span>Login</span></p>
            </form>
            {user.success ? <p style={{color: 'green'}}>User {newUser ?"Created": "logged in"} Successfully</p> : <p style={{color: 'red'}}>{user.error}</p>}
            </Container>
            <Row className="alternative">
                <div className="line"></div>
                <p>Or</p>
                <div className="line"></div>
            </Row>
           <Row>
               <div>
                   <div onClick={handleFSignIn}  className="alternateBtn">
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
       

           </Row>
        </div>
    );
};

export default Login;