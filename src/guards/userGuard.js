import React from 'react'
import { Navigate } from 'react-router-dom'
// import Homepage from '../components/Homepage'
import Main from '../components/Main'

export const UserGuard = () => {
  const login = JSON.parse(localStorage.login)
  if (login) {
    return <Main />
  } else {
    // return <Main />
    return <Navigate to='/'/>
  }
}
