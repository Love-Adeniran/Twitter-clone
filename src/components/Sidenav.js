import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pic from '../assets/my-img.jpeg'

const Sidenav = () => {
   let navigate = useNavigate()
    const logOut=() =>{
        localStorage.login = JSON.stringify(false)
        alert('Click Ok to LogOut')
        navigate('/')
    }
    useEffect(() => {
        const getLocalDetails = JSON.parse(localStorage.details)
        console.log(getLocalDetails);
        
    }, [])
    
    
  return (
    <>
        <nav className="col-2  pt-3 ps-4 black me-0 ">
            <div className='p-1'>
                <div className='border-light rounded'>
                    <i className='fa fa-twitter text-light fs-1'></i>
                </div>
            {/* <div className='row'> */}
                <div >
                    <Link to="/home" className='text-decoration-none text-light '>
                        
                        <h4 className="my-2 border-dark border rounded-pill btn text-light px-4">
                            <span className='me-3'>
                            <i className='fa fa-home text-light fs-4'></i>
                        </span>Home</h4>
                    </Link>
                    
                </div>
            {/* </div> */}
                <div className='m-0 p-0'>
                    <Link to="/explore" className='text-decoration-none text-light'>
                        <h4 className="my-2 border-dark border rounded-pill btn text-light px-4">Explore</h4>
                    </Link>
                </div>
            
                <div className='m-0 p-0'>
                    <Link to="/communities" className='text-decoration-none text-light '>
                        <h4 className="my-2 border-dark border rounded-pill btn text-light px-4"> <span className='me-3'>
                            <i className=" fa fa-group text-light"></i>
                        </span>Communities</h4>
                    </Link>
                </div>
                <div className='m-0 p-0'>
                    <Link to="/notifications" className='text-decoration-none text-light '> 
                        <h4 className="my-2 border-dark border rounded-pill btn text-light px-4">
                            <span className='me-3'>
                                <i className=" fa fa-bell text-light"></i>
                            </span>Notifications</h4>
                    </Link>
                </div>
            
                <div className='m-0 p-0'>
                    <Link to="/msgs" className='text-decoration-none text-light '>
                        <h4 className="my-2 border-dark border p-2 rounded-pill btn text-light px-4">
                            <span className='me-3'>
                            <i className=" fa fa-envelope text-light"></i>
                        </span>Messages</h4>
                    </Link>
                </div>

                {/* <div className='m-0 p-0'>
                    <Link to={"/profile/"+} className='text-decoration-none text-light '>
                        <h4 className="my-2 border-dark border p-2 rounded-pill btn text-light px-4">Profile</h4>
                    </Link>
                </div> */}
            
                <div className='m-0 p-0'>
                    <Link to="/more" className='text-decoration-none text-light'>
                        <h4 className="my-2 border-dark border rounded-pill btn text-light mb-0 px-4">More</h4>
                    </Link>
                </div>
                
            
                <div className='my-2 mb-3'>
                    <button className='btn btn-info rounded-pill border-0   text-light fs-5'>Tweet</button>
                </div>
                {/* <div className='border border-1 rounded-pill my-2 text-light mt-4'> */}
                    <div>
                        <img src={pic} alt="me" width={50} className="rounded-circle "/>
                    </div>
                    Name

                {/* </div> */}
                <div>
                    <button className='btn btn-primary' onClick={logOut}>Log Out</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Sidenav