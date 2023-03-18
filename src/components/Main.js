import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from './Sidenav'

function Main() {
  return (
    
    <div className='row container-fluid m-0 p-0'>
        <Sidenav /> 
        <Outlet />
    </div>
  )
}

export default Main