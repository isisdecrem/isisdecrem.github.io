import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyB0jZ6eOPftBa7cVXcvssTBZvYKirqDI9U",
    authDomain: "brainpower-dd828.firebaseapp.com",
    projectId: "brainpower-dd828",
    storageBucket: "brainpower-dd828.appspot.com",
    messagingSenderId: "505064365443",
    appId: "1:505064365443:web:0a2711c3ae7a229c626ab6",
    measurementId: "G-LT9LG0QF5J"  
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const ref = ref(db, 'users/' + 'me'); 
//testing database ref
 

//login button = submitButton
const login = document.getElementById("signin");
const logInButton= document.getElementById("signin-btn");
const emailLogInInput= document.getElementById("email");
const pwLogInInput= document.getElementById("password");

const createaccount = document.getElementById("createaccount");
const signUpButton = document.getElementById("create-acc-btn");
const emailSignUpInput= document.getElementById("email-signup");
const pwSignUpInput= document.getElementById("password-signup");
const pwSignUpConfirmInput= document.getElementById("password-confirm");
const fNameInput = document.getElementById("fName");
const lNameInput = document.getElementById("lName");
const schoolInput = document.getElementById("school");

var email, password, emailSignUp, pwSignUp, pwSignUpConfirm, fName, lName, school;

//Sign Up
signUpButton.addEventListener("click", function(){
    var valid = true; 
    emailSignUp = emailSignUpInput.value; 
    pwSignUp = pwSignUpInput.value; 
    pwSignUpConfirm = pwSignUpConfirmInput.value;
    fName = fNameInput.value;
    lName = lNameInput.value;
    school = schoolInput.value;

    //make sure they put in the info
    if(pwSignUp == null || pwSignUpConfirm == null || emailSignUp == null || fName == null || lName == null || school == null){
        window.alert("Please fill in the required fields.");
        valid=false; 
    }
    //check pw matches
    if(pwSignUp != pwSignUpConfirm){
        valid=false;
        window.alert("Passwords do not match.");
    }

    if(valid){
      createUserWithEmailAndPassword(auth, emailSignUp, pwSignUp)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("Account created!"); 
        window.location="home.html"; 

      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
});


//Sign In
logInButton.addEventListener("click", function(){
  email = emailLogInInput.value; 
  console.log(email);
  password = pwLogInInput.value; 
  console.log(password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) =>{
    const user = userCredential.user;
    console.log("Signed in");
    window.alert("Signed in");
    window.location="home.html"; 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    console.log("Error");
    window.alert("Error");
  });
});

