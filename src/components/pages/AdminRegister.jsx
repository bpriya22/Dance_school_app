import React, { useState } from 'react';
import "../css/Admin.css"
import axiosInstance from './../Axios/Axiosinstance';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  let [state, setState] = useState({
    userName:"",
    email:"",
    password:"",
    phone:"",
    dob:"",
    gender:"",
  })
  let {userName,email,password,phone,dob,gender}=state
  let handlestate=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setState({...state,[name]:value})
  }
  let navigate = useNavigate()
  let handlesubmit= async (e)=>{
    e.preventDefault();
    console.log(state)
    try {
      let payload={
        userName,
        email,
        password,
        phone,
        dob,
        gender,
      }
      let finalData=await axiosInstance.post("/authenticate",payload)
      console.log(finalData)
      toast.success(("Successfully registered in"), {
        position : toast.POSITION.TOP_CENTER
      })
      navigate("/login")
    } catch (error) {
      console.log("unable to connect to server")
    }
  }
  return (
    <div>
     <ToastContainer/>
    <section >
      <article>
        
      <form onSubmit={handlesubmit}>
      <h1>Admin Register</h1>
        <table>
          <tr>
            <td>
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" id="userName" value={userName} onChange={handlestate}/><br /><br />
          </td>
          </tr>
          <tr>
            <td>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} required onChange={handlestate}/><br /><br />
            </td> 
            </tr> 
            <tr>
              <td>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" required value={password} onChange={handlestate} /><br /><br />
              </td>
            </tr>
              
              <tr>
                <td>
                <label htmlFor="phone">Phone number</label>
              <input type="number" name="phone" id="phone" value={phone} required maxLength={10} onChange={handlestate} /><br /><br />
                </td>
                </tr>
              

              <tr>
                <td>
                <label >Gender</label>
          <label htmlFor='Male'>
          <input
            type="radio"
            value="Male"
            id='Male'
            name='gender'
            onChange={handlestate}
          />
            Male
          </label>
          <label htmlFor='Female'>
          <input
            type="radio"
            value="Female"
            id='Female'
            name='gender'
            onChange={handlestate}
          />
            Female
            </label>
          <br /><br />
            <label htmlFor="dob">DOB</label>
            <input type="date" name="dob" id="dob" value={dob}  required onChange={handlestate} />
                </td>
                </tr>
            
        <ToastContainer/>
        <tr>
          <td>
          <button >Sign Up</button>
          </td>
          </tr>
       
        </table>
      </form>
      </article>
    </section>
    </div>
  )
}
export default AdminRegister




