import React from 'react'
import { useNavigate } from 'react-router-dom'


 const PublicRoutes = ({children}) => {
    let navigate=useNavigate()

    if(localStorage.getItem("token"))
    {
        return navigate("/")
    }
    else{
        return(
            <div>
                {children}
            </div>
        )
    }
 
}
export default PublicRoutes
