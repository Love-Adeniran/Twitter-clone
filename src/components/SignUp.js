import React, { useEffect, useState } from 'react'

function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const [details, setDetails] = useState([])

  const getDetails = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUserDetails({ ...userDetails, [name]: value })
  }

    useEffect(() => {
      if (localStorage.details) {
        let localDetails = JSON.parse(localStorage.details)
        setDetails(localDetails)
      }
    }, [])

  const saveDetails = () => {
    // alert('i dey work oo')
    if (
      userDetails.firstname === '' ||
      userDetails.lastname === ''  ||     
      userDetails.email === '' ||
      userDetails.password === ''
    ) {
      alert('Kindly fill in the Empty fields!')
    } else {
      let newDetails = [...details, userDetails]
      setDetails(newDetails)
      localStorage.details = JSON.stringify(newDetails)
      console.log(newDetails)
      console.log(localStorage.details)
      alert('You have successfully signed up, proceed to Login!')
      setUserDetails({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      })
    }
    // navigate('./login')
  }
  return (
    <>
      <div className="bg-light m-5 w-75 border rounded p-5 shadow p-3 mb-5 bg-body rounded">
        <div className="">
          <h1>Sign In Here</h1>
        </div>

        <div className="p-2">
          <input
            type="text"
            onChange={getDetails}
            name="firstname"
            value={userDetails.firstname}
            placeholder="First Name"
            className="form-control w-100 m-2 "
          />

          <input
            type="text"
            onChange={getDetails}
            placeholder="Last Name"
            name="lastname"
            value={userDetails.lastname}
            className="form-control w-100 m-2"
          />

          <input
            type="email"
            onChange={getDetails}
            placeholder="Email"
            name="email"
            value={userDetails.email}
            className="form-control w-100 m-2"
          />

          <input
            type="password"
            onChange={getDetails}
            placeholder="Password"
            name="password"
            value={userDetails.password}
            className="form-control w-100 m-2"
          />
          <button className="btn  border" onClick={saveDetails}>
            SignUp
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUp
