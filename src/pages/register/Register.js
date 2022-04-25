import React from 'react'

const Register = () => {
  const [newDetails, setNewDetails] = useState({userName: '', email: '', password: ''})
  
 const [regError, setRegError] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    
    setNewDetails({
      userName: newDetails.userName,
      email: newDetails.email,
      password: newDetails.password
    })
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
