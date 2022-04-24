import React, { useState } from 'react';
import LoginForm from '../form/LoginForm';
import './Login.css';

const Login = () => {
  const adminUser = {
    email: 'mikel123@o2.pl',
    password: 'mikel123',
  };

  const [user, setUser] = useState({ name: '', email: '' });

  const [error, setError] = useState();

  const SignIn = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.name,
      });
    } else {
      setError('Email or password does not match, check again.');
    }
  };

  const SignOut = () => {
    setUser({
      name: '',
      email: '',
    });
  };

  return (
    <div className="">
      {user.email != '' ? (
        <div>
          <h1>Welcome {user.name} </h1>
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
