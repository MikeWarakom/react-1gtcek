import React, {useState} from "react";


const LoginForm = ({SignIn, error}) => {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  const submitHandler = e => {
    e.preventDefault()

    SignIn(details);
  }
  return (
    <form onSubmit={submitHandler}>
      <h1>Sign in</h1>
       {/*error*/}
       <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})}/>
       </div>
       <div className="form-group">
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} />
       </div> 
       <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})}/>
       </div>
       <input type="submit" value="LOGIN"/>
    </form>
  )
}

export default LoginForm;