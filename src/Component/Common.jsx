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
                        SoftCygnus Limited is a leading provider of advanced business solutions, specializing in Feedback Systems, Auto Identification, and Data Capturing Systems (AIDCS). We leverage a variety of cutting-edge technologies such as Barcoding, RFID, Biometric, Magnetic Stripe Readers, IC Chip Readers, NFC, WiFi, and Contactless Reader Technologies to deliver reliable and scalable solutions across different regions.
                      </p>
                        <p>
                          At SoftCygnus, we combine world-class products from industry-leading manufacturers with our technical expertise to deliver customized solutions across various industry sectors including:
                        </p>
                        <ul>
                          <li>Hospitality</li>
                          <li>Travel & Tourism</li>
                          <li>Retail</li>
                          <li>Warehousing & Distribution</li>
                          <li>Manufacturing</li>
                          <li>Transportation & Logistics</li>
                        </ul>
                        <p>
                        In addition to fixed infrastructure systems, we offer a wide range of mobile device-based solutions that can be easily configured to meet specific business requirements.

To keep up with emerging technologies, SoftCygnus also provides AI-driven solutions such as:
                        </p>
                        <ul>
                          <li><b>AI Chatbots </b>for customer support and automation</li>
                          <li><b>Virtual Agents</b> for intelligent query handling</li>
                          <li><b>AI Integration Services</b> to enhance workflows, improve response times, and reduce manual effort</li>
                        </ul>
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