import Axios from 'axios'
import React, { useState } from 'react';



function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const loginuser = () => {
    Axios.post("http://localhost:5001/app/login", {
      email,
      password
    }).then((res) => {
      alert('you are logged in ')
    }).catch((res) => {
      alert('invalid credentials')
    });
  }

  return (
    <div className='container'>
      <div class="form-group">
        <form className='container mt-3'>
          <input type='Email' placeholder='Enter email' name='email' onChange={(e) => {
            setemail(e.target.value);
          }} /><br />
          <input type='password' placeholder='Enter Password' name='password' onChange={(e) => {
            setpassword(e.target.value);
          }} /><br />
          <button className='btn btn-primary mt-2' type='submit' onClick={loginuser}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;