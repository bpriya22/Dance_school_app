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
      let finalData=await axiosInstance.post("/admins/save",payload)
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



// import React,  { useState }  from 'react'
// import { useNavigate } from 'react-router-dom'
// import axiosInstance from '../Axios/Axiosinstance'

// const AdminRegister = () => {


//     let navigate=useNavigate()

//     let [data, setData]=useState({
//       userName:"",
//       email:"",
//       password:"",
//       phone:"",
//       gender:"",
//       dob:""
//     })
    
//     let {userName,email,password,phone,gender,dob}=data
//     let handleData=(e)=>{
//       let name=e.target.name
//       let value=e.target.value
//       setData({...data,[name]:value})
//       // console.log(data);
//     }

//     let handleSubmit=async (e)=>{
//         e.preventDefault()
//         console.log(data);
//         try{
//           let payload={
//             userName,
//             email,
//             password,
//             phone,
//             gender,
//             dob
//           }
//           let finalData= await axiosInstance.post("/admins/save",payload)
//           console.log(finalData);
//           alert(`successfully registered with ${email} as admin`)
//           navigate("/login")
//         }
//        catch{
//         console.log("unable to connect");
//        }
//       }
//   return (
//     <div>
//       <form action="">
//         <fieldset>
//           <legend>Admin Register</legend>
//           <input type="text" name="userName" id="userName" value={userName} placeholder='userName' onChange={handleData}/><br /><br />
//           <input type="email" name="email" id="email" value={email} placeholder='email' onChange={handleData} /><br /><br />
//           <input type="password" name="password" id="password" value={password} placeholder='password' onChange={handleData}/><br /><br />
//           <input type="text" name="phone" id="phone" value={phone} placeholder='phone' onChange={handleData} /><br /><br />
//           <fieldset>
//             <legend>Gender</legend>
//             <input type="radio" name="gender" id="male" value="Male" onChange={handleData}/>
//             <label htmlFor="male">Male</label>
//             <input type="radio" name="gender" id="female" value="Female" onChange={handleData}/>
//             <label htmlFor="female">Female</label>
//             <input type="radio" name="gender" id="other" value="Other" onChange={handleData}/>
//             <label htmlFor="other">Other</label>
//           </fieldset><br />
//           <label htmlFor="dob">date of birth</label><br />
//           <input type="date" name="dob" id="dob" value={dob} onChange={handleData}/><br />
//           <button type="submit" onClick={handleSubmit}>Register</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default AdminRegister



