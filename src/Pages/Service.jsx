import React from 'react'
import Card from '../Component/Card'
import Sdata from '../Data/Sdata';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center fw-bold'>Our Services</h1>
        <p className='text-center text-muted'>
          Delivering innovative, scalable, and reliable technology solutions for modern businesses.
        </p>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                Sdata.map((val, index) => {
                  return (
                    <Card 
                      key={index}
                      icon={val.icon}   // ✅ changed
                      title={val.name} // ✅ fixed typo (titile → title)
                      description={val.description}
                      features={val.features} // ✅ added features prop 
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;