import React, { useState } from 'react';
import LoginForm from '../loginForm/LoginForm';
import './Login.css';

const Login = () => {
  const adminUser = {
    username: 'Mikel',
    email: 'mikel123@o2.pl',
    password: 'mikel123',
  };

  const [user, setUser] = useState({ username: '', email: '' });

  const [error, setError] = useState();

  const SignIn = (details) => {
    console.log(details);

    if (
      (details.emailOrUsername === adminUser.email || details.emailOrUsername === adminUser.username )&&
      details.password === adminUser.password
    ) {
      setUser({
        /*tu dodac if @*/
        name: details.username,
        email: details.email,
      });
    } else {
      setError('Email or password does not match, check again.');
    }
  };

  const SignOut = () => {
    setUser({
      username: '',
      email: '',
    });
  };

  return (
    <div className="">
      {user.email != '' ? (
        <div>
          <h1>Welcome {user.username} </h1>
          <button onClick={SignOut}>Sign out</button>
        </div>
      ) : (
        <LoginForm SignIn={SignIn} error={error} />
      )}
      ;
    </div>
  );
};

export default Login;
