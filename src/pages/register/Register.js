import React from 'react'
import RegisterForm from '../registerForm/RegisterForm'

const Register = () => {

  const existingUser = {
    username: 'Mikel',
    email: 'mikel123@o2.pl',
    password: 'mikel123'
  }

  const [newUser, setNewUser] = useState({username: '', email: '', password: ''})
  
 const [regError, setRegError] = useState()

  const SignUp = (newDetails) => {

    if (
      newDetails.username != existingUser.username || 
      newDetails.email != existingUser.email
    ) { 
      setNewUser({
        username: newDetails.username,
        email: newDetails.email,
        password: newDetails.password
      });
      } else {
        setRegError('Username or email already exist.' )
      }
  }

  return (
    <div>
     {(newUser.email =! '') ? (
      <h1> Thank you for registering, sign in here </h1>
      ) : (
        <RegisterForm SignUp={SignUp} regError={regError}/>
      )}
    </div>
  )

}

export default Register
