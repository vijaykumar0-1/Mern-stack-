import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const inputhandler = (e) => {
  //   const { name, email, password } = e.target
  //   setuser({
  //     ...user,
  //     [name]: value
  //   })
  // }

  const createUser = () => {
    Axios.post("http://localhost:5001/app/register", {
      name,
      email,
      password
    }).then(() => { alert('user is created') }).catch(() => {
      alert('email already exist')
    });
  };


  return (
    <div className='container'>
      <div class="form-group">
        <form className='container mt-3'>
          <input type='text' placeholder='Enter Name' name='name'
            onChange={
              (e) => { setName(e.target.value); }
            } /><br />
          <input type='Email' placeholder='Enter email' name='email'
            onChange={
              (e) => { setEmail(e.target.value); }
            } /><br />
          <input type='password' placeholder='Enter Password' name='password'
            onChange={
              (e) => { setPassword(e.target.value); }
            } /><br />
          <button className='btn btn-primary mt-2' onClick={createUser} type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register