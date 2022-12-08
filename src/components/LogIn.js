import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [getLoginDetails, setGetLoginDetails] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let storeChange = { ...getLoginDetails, [name]: value }
    setGetLoginDetails(storeChange)
  }
  const navigate = useNavigate()
  // let login = false;
  const checkLogin = () => {
    console.log(getLoginDetails)
    if (localStorage.details) {
      let localDetails = JSON.parse(localStorage.details)

      if (getLoginDetails.email === '' && getLoginDetails.password === '') {
        alert('Kindly fill in the Empty Field(s)!')
      } else {
        const getLocalDetails = localDetails.find(
          (each) =>
            each.email === getLoginDetails.email &&
            each.password === getLoginDetails.password,
        )
        if (getLocalDetails) {
          localStorage.login = JSON.stringify(true)
          alert('You have successfully Logged in!')
          navigate('/home')
        } else {
          alert('Invalid Email or Password!')
        }
      }
    } else {
      alert('SignUp Again!')
    }
  }
  return (
    <>
      <div className="p-5 w-75  m-5 bg-light  bg-body  box">
        <div className="p-3">
          <h1>Login Here</h1>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={getLoginDetails.email}
            name="email"
            className="form-control w-100 m-2"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={getLoginDetails.password}
            name="password"
            className="form-control w-100 m-2"
          />
          <button className="btn  border" onClick={checkLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default LogIn
