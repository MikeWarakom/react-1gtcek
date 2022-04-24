import React, {useState} from "react";
import LoginForm from "../form/LoginForm"
import "./Login.css";


const Login = () => {
   const adminUser = {
     email: "mikel123@o2.pl",
     password: "mikel123"
   };

   const [user, setUser] = useState({name: "", email: ""});

   const [error, setError] = useState();

   const SignIn = details => {
     console.log(details)
   }

   const SignOut = () => {
     console.log("Signed out")
   };
   
    return (
      <div className="">
       {(user.email != "" ) ? (
        <div>
          <h1>Welcome {user.name} </h1>
          <button>Sign out</button>
        </div>
       ) : (
        <LoginForm SignIn={SignIn} error={error}/>
       )};
      </div>
    );
}

export default Login;
