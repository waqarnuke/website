import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
   <>
   <section id="header" className="d-flex align-items-center">
        <div className='container-fluid bg-light mb-4 rounded-3'>
          <div className="row">
          <div className="col-md-8 mt-2 order-2 order-lg-1">
                  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3">
                    <div className="p-lg-5 my-5">
                      <h4 className="display-4 fw-normal">{props.name}</h4>
                      <p className="">
                      SoftCygnus limited company and is a leading provider of business solutions in the field of Feedback Systems, Auto Identification and Data Capturing Systems (AIDCS) using various data capturing modules/modes, such as Barcoding, RFID, Biometric, Magnetic Swipe readers, IC Chip readers, NFC, WiFi, Contactless readers technologies in various Region.
                        </p>
                        <p>
                          SoftCygnus combines world-class products from industry leaders with its own professional expertise to provide solutions across industry sectors that include Hospitality, Travel, Retail, Warehousing & Distribution, Manufacturing, Transportation & Logistics.
                        </p>
                        <p>
                        SoftCygnus also provides various mobile device based solutions as mentioned below. Here is a list of mobile device Products & Solutions, which can easily be configured to meet the Clients’ business needs and at the same time not limited to.
                        </p>
                      <NavLink className="btn btn-outline-secondary" to={props.visit}>{props.btnname}</NavLink>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                  </div>
                </div>
                  <div className="col-md-4 mt-2 order-1 order-lg-2 header-img">
                      <img src={props.imgsrc} className="img-fluid animated" alt='Header Img' />
                  </div>
          </div>
        </div>
      </section>
     
   </>
  )
}

export default Common