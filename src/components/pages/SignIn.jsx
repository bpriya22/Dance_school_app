import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosInstance from '../Axios/Axiosinstance';

const SignIn = () => {
  let navigate = useNavigate()

  let [state, setState] = useState({
    userEmail: "",
    password: ""
  })

  let { userEmail, password } = state

  let handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setState({ ...state, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state);

    try {
      let payload = {
        userEmail,
        password
      }

      let { data } = await axiosInstance.post("/authenticate", payload)

      let token = data.token
      let role = data.role
      console.log(token);

      if (token) {
        localStorage.setItem("token", token)
        localStorage.setItem("role", role)
        if (role === "ROLE_ADMIN") {
          alert(`Successfully Logged In with the email ${userEmail} as Admin`)
          navigate("/")
        } else {
          alert(`Successfully Logged In with the email ${userEmail} as User`)
          navigate("/")
        }
      } else {
        localStorage.removeItem("token", token)
        localStorage.removeItem("role", role)
      }
    } catch {
      alert("Invalid Password or Username")
      console.log("Unable to Connect")
    }
  }

  const handleRegister = () => {
    setState({
      userEmail: "",
      password: ""
    })
    navigate('/register');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <section >
          <article >
            <div >
              <h1>Sign In</h1>
              <div >
                <label htmlFor='userEmail'>Email</label>
                <input type='email' id='userEmail' name='userEmail' value={userEmail} onChange={handleChange} />
              </div>
              <div >
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' value={password} onChange={handleChange} />
              </div>
              <div >
                <label>
                  <input type='checkbox' />
                  Remember me
                </label>
              </div>
              <div >
                <a href='#'>Forgot Password?</a>
              </div>
              <div >
                <button type='submit'>Login</button>
              </div>
              <div >
                <p>
                  Don't have an account?{' '}
                  <a href='#' onClick={handleRegister}>
                    Register
                  </a>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </form>
  )
}

export default SignIn