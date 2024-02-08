import React from 'react';

const Service = (props) => {
  return (
   <>
   <div className="col py-4 my-2 my-sm-3">
              <a href="services-single-v1.html" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                <div className="card-body pt-3">
                  <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <i className="d-block m-1">{props.ico}</i>
                  </div>
                  <h2 className="h4 d-inline-flex align-items-center">
                    {props.title}
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                  </h2>
                  <p className="fs-sm text-body mb-0">
                    {props.description}
                  </p>
                </div>
              </a>
    </div>
   </>
  )
}

export default Service