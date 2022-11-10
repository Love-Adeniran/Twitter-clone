import React, { useEffect, useState } from 'react'


function SignUp() {
    const [UserDetails, setUserDetails] = useState({firstname:'',lastname:'',email:'',password:''})
    const [Details, setDetails] = useState([])
    const getDetails = (e) =>{
       let name = e.target.name
       let value = e.target.value
       setUserDetails({...UserDetails, [name]:value})
    
    }
    useEffect(() => {
     let localDetails = JSON.parse(localStorage.details)
     setDetails(localDetails)
    }, [])
    
    const saveDetails = () =>{
        if(UserDetails.firstname===''&& UserDetails.lastname==='' && UserDetails.email===''&& UserDetails.password===''){
            alert('Kindly fill in the Empty fields!')
        }
       else{
        const newDetails = [...Details, UserDetails]
        setDetails(newDetails)
        localStorage.details= JSON.stringify(newDetails)
        alert('You have successfully signed up, proceed to Login!')
        UserDetails.firstname = ''
        UserDetails.lastname = ''
        UserDetails.email = ''
        UserDetails.password = ''
       }
        // navigate('./login')
       
    }
  return (
    <>
            <div className='bg-light m-5 w-75 border rounded p-5 shadow p-3 mb-5 bg-body rounded'>

                <div className=''><h1>Sign In Here</h1></div>

                <div className='p-2'>
                    
                    <input type="text" onChange={getDetails} name='firstname' value={UserDetails.firstname} placeholder='First Name' className='form-control w-100 m-2 ' />
                   
                    <input type="text" onChange={getDetails} placeholder='Last Name' name='lastname' value={UserDetails.lastname} className='form-control w-100 m-2' />
                    
                    <input type="email" onChange={getDetails} placeholder='Email' name='email' value={UserDetails.email} className='form-control w-100 m-2' />
                    
                    <input type="password" onChange={getDetails} placeholder='Password' name='password' value={UserDetails.password} className='form-control w-100 m-2' />
                    <button className='btn  border' onClick={saveDetails}>SignUp</button>

                </div>
        
        </div>
    </>
  )
}

export default SignUp