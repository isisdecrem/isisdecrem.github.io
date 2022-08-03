import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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
 
//login button = submitButton
const signin = document.getElementById("signin");
const signInButton= document.getElementById("signin-btn");
const emailSignInInput= document.getElementById("email");
const pwSignInInput= document.getElementById("password");

const createaccount = document.getElementById("createaccount")
const signUpButton = document.getElementById("create-acc-btn");
const emailSignUpInput= document.getElementById("email-signup");
const pwSignUpInput= document.getElementById("password-signup");
const pwSignUpConfirmInput= document.getElementById("password-confirm");

var email, password, emailSignUp, pwSignUp, pwSignUpConfirm;

signUpButton.addEventListener("click", function(){
    var valid = true; 
    emailSignUp = emailSignInInput.value; 
    pwSignUp = pwSignUpInput.value; 
    pwSignUpConfirm = pwSignUpConfirmInput.value;

    //make sure they put in the info
    if(pwSignUp == null || pwSignUpConfirm == null || emailSignUp == null){
        window.alert("Please fill in the required fields.")
        valid=false; 
    }
    //check pw matches
    if(pwSignUp != pwSignUpConfirm){
        valid=false
    }

    if(valid){
      createUserWithEmailAndPassword(auth, emailSignUp, pwSignUp)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
});

