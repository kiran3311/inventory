import React from 'react'
import{Navigate, Outlet} from 'react-router-dom'


const Private_components = () => {
    const auth = localStorage.getItem('user')
  return (
    
   auth?  <Outlet/> : <Navigate to='signup'/>
  )
}

export default Private_components
