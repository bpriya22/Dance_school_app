import React from 'react'
import Navbar from './../Nav';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    if(localStorage.getItem("token"))
  return (
    <>
    {children}
    </>
    
    )
    else{
        return(
            <>
            {alert("Please login to view home page")}
            <Navigate to ="signin"/>
            </>
        )
    }
}
