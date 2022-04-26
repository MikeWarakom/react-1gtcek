import React from 'react'

const Register = () => {

  const existingUser = {
    userName: 'Mikel',
    email: 'mikel123@o2.pl',
    password: 'mikel123'
  }

  const [newUser, setNewUser] = useState({userName: '', email: '', password: ''})
  
 const [regError, setRegError] = useState()

  const SignUp = (newDetails) => {

    if (
      newDetails.userName != existingUser.userName || 
      newDetails.email != existingUser.email
    ) { 
      setNewUser({
        newUser: newDetails.newUser,
        email: newDetails.email,
        password: newDetails.password
      });
      } else {
        setRegError('Username or email already exist.' )
      }
  }

  return (
    <div>
     {(newDetails.email =! '') ? (
      <h1> Thank you for registering, sign in here </h1>
      ) : (
        <loginForm newDetails={newDetails}/>
      )}
    </div>
  )

}

export default Register
