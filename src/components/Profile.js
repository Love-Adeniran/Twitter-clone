import React from 'react'
import { useParams } from 'react-router-dom'


function Profile() {
    const {firstname} = useParams()
    const localUser = JSON.parse(localStorage.details)
    const user = localUser.find(each=> each.firstname === firstname)
  return (
    <>
        <div className="col-10 black">
            <div className="row  border-start p-2">
              
                <div className="col-6 text-light ">
                    <h2 className='text-light'>Profile</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magnam ut molestiae rerum dignissimos non quisquam adipisci accusamus distinctio facilis nihil magni ad sunt culpa harum vel, aut provident rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias in quibusdam, dicta, inventore nesciunt suscipit facilis quos, corrupti fugit asperiores minima! Nihil consectetur quae aliquid laudantium mollitia minima dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum aut quam, nobis harum quae molestiae itaque magni. Commodi doloribus officiis enim tempore officia in, veniam minus quae omnis consequatur.</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores ducimus dolores optio? Consectetur porro tempore veniam ullam, nihil voluptate veritatis libero repellat eos sint autem, aspernatur cumque, delectus temporibus?</p>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga recusandae magni sequi ducimus consequuntur accusamus id aspernatur rerum, voluptatum blanditiis nulla placeat! Corporis facere facilis reprehenderit, dolor natus odit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quaerat, non dolorum commodi, veritatis deleniti adipisci quas blanditiis dignissimos excepturi fuga iste aliquam dolor eos ipsa, eaque illum obcaecati assumenda?</p>
                </div>
                <div className="col-5 border-start pt-2 ps-5 ms-5">
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

export default Profile