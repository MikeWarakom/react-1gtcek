import React from 'react'

const RegisterForm = ({SignUp, regError}) => {
   
  const [newDetails, setNewDetails] = useState({username: '', email: '', password: ''})

  registerSubmitHandler = (e) => {
    e.preventDefault()

    SignUp(newDetails)
  }

   return (
     <form>
       <h1>Sign up</h1>
       {/**
        error
        */}
        <div className='form-group'>
          <label>New username</label>
          <input type='text' id='username'
          onChange={(e) => setNewDetails(
            {...newDetails, username: e.target.value}
          )}
          value={newDetails.username}/>
        <div className='form-group'>
          <label>New email</label>
          <input/>
        </div>



        </div>
        

     </form>
   )
}

export default RegisterForm