import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

const LandingPage =() =>{
  return (
    <div className='container-fluid  p-5 landingImage'>
        <div className='row p-5 '>
            <div className='col-md-6 col-sm-12  border-end ps-2 '>
                <SignUp /> 
            </div>
            <div className='col-md-6 col-sm-12 p-2 '>
                <LogIn />
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage