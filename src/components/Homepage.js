import React from 'react'

const Homepage = () => {
  return (
    <>
        <div className="container w-75 black m-0">
            <div className="row p-2">
                <div className='align-end'></div>
                <div className="col-5 text-light p-2 m-2">
                    <h4 className='text-light m-2'>Home</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, iste! Exercitationem praesentium beatae fuga. A ab hic nostrum, soluta harum autem sit sunt tenetur eos, quidem voluptatibus maxime nisi incidunt.</p>
                    {/* <div className='bg-primary rounded-circle d-inline p-4 my-4'></div> */}
                    <hr />
                    <div className='justify-content-center'>
                        <h5 className='d-inline text-align-center text-info'>Show 250 Tweets</h5>
                    </div>
                    <hr />
                    <h4 className='m-2'>Welcome back</h4>
                    <p>Select some topics you're interested in to help personalize your Twitter experience, starting with finding people to follow</p>
                    <button className='btn btn-light text-dark rounded'>Get Started</button>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque molestiae vitae nisi minima ex culpa nemo maiores aperiam, veniam labore eum aspernatur quo velit! Facere dolore ut veniam ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut iste esse quisquam odit et facilis inventore voluptatum modi odio consequatur maxime eos, blanditiis, porro ea quas sed quae! Magni, sint!</p>
                    <hr />
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quae quaerat, officiis consequuntur maxime tempore? Mollitia sed repudiandae eius omnis cupiditate vero aut a facilis veritatis, fugiat vel, harum officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum voluptatum fuga nostrum repellendus? Doloremque mollitia quidem praesentium in exercitationem repudiandae modi delectus, a accusantium corporis quos aspernatur, nam saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora corrupti laudantium dolore deleniti eligendi autem incidunt unde distinctio quo quibusdam aperiam, omnis rem quos dignissimos est atque. Commodi, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur quaerat deserunt necessitatibus fugiat molestias ut, placeat at minima, laborum pariatur optio incidunt, dolorum consectetur eaque. Corporis magnam provident cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure cum tempore pariatur corrupti magnam eum quia eius provident. Architecto natus quos iusto labore laboriosam praesentium saepe aut tenetur ipsam!</p>
                </div>
                <div className="col-4 border-start p-2 ">
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

export default Homepage