import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from './Sidenav'

function Main() {
  return (
    
    <div>
        <Sidenav /> <Outlet />
    </div>
  )
}

export default Main