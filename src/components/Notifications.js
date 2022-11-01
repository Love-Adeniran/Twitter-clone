import React from 'react'
import Sidenav from './Sidenav'

function Notifications() {
  return (
    <>
        <div className="container black">
            <div className="row border-end">
                {/* <div className="col-3 ">
                    <Sidenav/>
                </div> */}
                <div className="col-5 text-light">
                    <h2 className='text-light'>Notifications</h2>
                    <hr />
                    <p>No Notification available!</p>
                    <hr />
                </div>
                <div className="col-3 border-start p-2 ms-5">
                    <input type="text" className="form-control rounded-pill bg-dark w-100 text-light mb-4"/>
                    <div className='text-light rounded my-2 p-2 bg-dark'>
                        <h3>Trends For You</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet reprehenderit quos commodi eum fugit nostrum, maxime saepe, quo, ullam alias quisquam cupiditate aspernatur. Est sit fugit eum accusamus nihil aperiam.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque facilis, aliquid debitis inventore eum laudantium sit delectus? Ad deserunt fugiat soluta, eveniet debitis possimus ipsam nobis, at ratione cupiditate sit.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis doloremque aliquid reiciendis, debitis fugiat dolore aperiam consequuntur possimus rerum! Atque esse vel nesciunt saepe maiores corrupti neque ab minus! Unde.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Notifications