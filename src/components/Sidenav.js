import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/my-img.jpeg'

const Sidenav = () => {
    // const image = '../asset/my-img.jpeg'
  return (
    <>
        <nav className="col-2  p-3 ps-4 black">
            <div className='border-rounded'>
                <i className='fa fa-twitter text-light fs-1'></i>
                </div>
            <div className='row'>
                {/* <div className='col m-0 p-0'>
                <i className='fa-solid fa-house-user text-light fs-1'></i>
                </div> */}
                <div className='col'>
                    <h4 className="my-2 border-dark border p-2 rounded-pill">
                        {/* <i className='fa-solid fa-house-user text-light fs-1'></i> */}
                        <Link to="/home" className='text-decoration-none text-light'>Home</Link>
                    </h4>
                </div>
            </div>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/explore" className='text-decoration-none text-light'>Explore</Link>
            </h4>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/communities" className='text-decoration-none text-light'>Communities</Link>
            </h4>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/notifications" className='text-decoration-none text-light'>Notifications</Link>
            </h4>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/msgs" className='text-decoration-none text-light'>Messages</Link>
            </h4>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/profile" className='text-decoration-none text-light'>Profile</Link>
            </h4>
            <h4 className="my-2 border-dark border p-2 rounded-pill">
                <Link to="/more" className='text-decoration-none text-light'>More</Link>
            </h4>
            <div className='my-2 mb-3'>
                <button className='btn btn-info rounded-pill border-0 p-2 w-100 text-light fs-3'>Tweet</button>
            </div>
            <div className='border border-1 rounded-pill my-2 text-light p-2 mt-4'>
                <div>
                    <img src={pic} alt="me" width={50} className="rounded-pill"/>
                </div>
                Name

            </div>
        </nav>
    </>
  )
}

export default Sidenav