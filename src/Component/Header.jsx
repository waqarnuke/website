import React from 'react'


const Header = () => {

  return(
    <>
    <div className=' bg__image'>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-light">
            <div className="carousel-item active border-0 ">
                <div className="container zindex-5 pt-5">
                    <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5 ">
                        <div className="col-xl-8 col-lg-9 col-md-10 py-5 bg-dark opacity-50">
                            <h2 className="display-2 from-start mb-lg-4">The Best IT Solutions for Your Business</h2>
                            <p className="fs-lg pb-2 pb-sm-0 mb-4 mb-sm-5">We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
                        </div>
                        {/* <a href="#" className="btn btn-primary btn-lg">Get early access</a> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <div className="container zindex-5 pt-5">
                    <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5 ">
                        <div className="col-xl-8 col-lg-9 col-md-10 py-5 bg-dark opacity-50">
                            <h2 className="display-2 from-start mb-lg-4">The Best IT Solutions for Your Business</h2>
                            <p className="fs-lg pb-2 pb-sm-0 mb-4 mb-sm-5">We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
                            {/* <a href="#" className="btn btn-primary shadow-primary btn-lg">Get early access</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <div className="container zindex-5 pt-5">
                    <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5 ">
                        <div className="col-xl-8 col-lg-9 col-md-10 py-5 bg-dark opacity-50">
                            <h2 className="display-2 from-start mb-lg-4">The Best IT Solutions for Your Business</h2>
                            <p className="fs-lg pb-2 pb-sm-0 mb-4 mb-sm-5">We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
                            {/* <a href="#" className="btn btn-primary shadow-primary btn-lg">Get early access</a> */}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button> */}
    </div>
    </div>
   </>
  )
}

export default Header