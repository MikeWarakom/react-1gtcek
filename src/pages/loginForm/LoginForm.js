import React, { useState } from 'react';

const LoginForm = ({ SignIn, error }) => {
  const [details, setDetails] = useState({ emailOrUsername: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();

    SignIn(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Sign in</h1>
      {(error =! '' ? <div className="error">{error}</div> : '')}
      <div className="form-group">
        <label htmlFor="emailOrUsername">Username or email</label>
        <input
          type="text"
          name="emailOrUsername"
          id="emailUsername"
          onChange={(e) => setDetails({ ...details, emailOrUsername: e.target.value })}
          value={details.emailOrUsername}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="Sign In" />
      <div className="register">
        <p>
          Do not have account? <a href=""> Register here </a>.
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
