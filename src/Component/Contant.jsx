import React from 'react';
import Service from './Service';
import {AiOutlineHtml5, AiOutlineDesktop,AiOutlineRocket,AiOutlineAreaChart } from 'react-icons/ai';
import { BsMicrosoft } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import web1 from '../Images/about-img.jpg';

const Contant = () => {
  return (
    <>
{/* <Common 
      name='Welcome to Soft Cygnus' 
      imgsrc={web} 
      visit='/Service'
      btnname="Comming Soon" />
       */}
       <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-2 fw-bold lh-1">We Help To Grow Your Business</h1>
        <p className="lead">
        SOFT CYGNUS is a leading provider of business solutions in the field of Feedback Systems, Auto Identification and Data Capturing Systems (AIDCS) using various data capturing modules/modes, such as Barcoding, RFID, Biometric, Magnetic Swipe readers, IC Chip readers, NFC, WiFi, Contactless readers technologies in various region.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={web1} alt="" width="720" />
      </div>
    </div>
  </div>

       <section className="container  p-5 mb-4 rounded-3 bg-light">
        <div className="row pt-xl-3">
        <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Consultancy</h2>
           <p>
           At SoftCygnus Technologies, we’re obsessed with technology.Its power to change everything. Technology fuels our passion and commitment to helping organizations do what they set out to. When we engage, we bring fresh ideas that help you galvanize your performance. Refine your strategy. Spark new energy. The future—and how we get there—depends on those who build, connect, create and transform our world. The most successful and innovative businesses are already doing it, and we’re skilled experts at bringing in the teams and support needed to thrive.
           </p>
         </div>
         <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Responsibility</h2>
            <p>
            At Soft-Cygnus, we offer online recruitment solutions, that are tailor made to suit each customers business requirements and are scalable enough to fit into the existing business applications. Our solutions include a vacancy tracking system, role analysis, and applicant tracking software that work in tandem with one another to bring out an approach that results in a maximum talent-recruit match.
            </p>
         </div>
         <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Talent Management</h2>
           <p>
            The global talent management services of Softcygnus encompass an entire lifecycle of recruitment that includes posting job description ads, screening and short listing resumes, conducting first level interviews on phone and in person, reference checks, background scrutiny, past employment scrutiny, training and grooming sessions and personality analysis. Our clients are offered a wholistic approach in which they can expect to completely delegate the entire recruitment process to our experts and enjoy all the benefits of recruiting the right talent and avoiding expensive mistakes.
            </p>
         </div> 
        </div>
      </section>
      <section className="bg-secondary pb-md-2 pb-lg-5">
      <div className="container pb-4 pt-5">
        <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Our Services</h2>
        <div className="row align-items-center pb-5 mb-lg-2">
            <div className="col-md-8 text-center text-md-start">
              <p className="fs-lg text-muted mb-md-0">We are focused on helping brands grow through digital transformation services. We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision.</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
              {/* <a href="services-v1.html" className="btn btn-outline-primary btn-lg">See all services</a> */}
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          
          <Service 
            title={"Reporting"} 
            ico={<AiOutlineAreaChart 
            className="text-light fs-1"/>}
            description={"SoftCygnus presents to you, its custom-made reporting solutions that makes the tough task of handling and representing company data many times easier than ever."}  
          />
          <Service 
            title={".Net Technologies"} ico={<BsMicrosoft className="text-light fs-1"/>}
            description={"Desktop Applications, Web Applications, Mobile and Cross Platform Applications."}
          />
          <Service 
            title={"Database Development"} 
            ico={<AiOutlineDesktop  className="text-light fs-1"/>}
            description={"The experts at Softcygnus can offer you various solutions for developing robust databases that work with total assurance of integrity and data security. We use the following relational database management systems such as MS SQL, Oracle, MySQL, MangoDB."} 
          />
          <Service 
            title={"Trainings"} 
            ico={<AiOutlineRocket className="text-light fs-1"/>}
            description={"Customized trainings and courses, Seminars/Webinars, E-learning, Mentoring, Curriculum design."}
          />
          <Service 
            title={"Business Analyst"} 
            ico={<SiGooglemybusiness className="text-light fs-1"/>}
            description={"Business analysts use data to form business insights and recommend changes in businesses and other organizations. Business analysts can identify issues in virtually any part of an organization, including IT processes, organizational structures, or staff development."}
          />
          <Service 
            title={"User Experience"} 
            ico={<AiOutlineHtml5 className="text-light fs-1"/>}
            description={"Softcygnus experts creating a product that is easy to use, easy to interact with, and accessible for the users while putting their feelings first, based on a long-term and short-term scale."}  
          />
        </div>
      </div>
      </section>
      <section className="position-relative bg-dark py-5">
        <span className="position-absolute top-0 start-0 w-100 h-100"></span>
        <div className="container position-relative zindex-5 text-center my-xl-3 py-1 py-md-4 py-lg-5">
          <p className="lead text-light opacity-70 mb-3">Ready to get started?</p>
          <h2 className="h1 text-light pb-3 pb-lg-0 mb-lg-5">Launch Your Project with Us</h2>
          <a href="#!" className="btn btn-primary shadow-primary btn-lg">Work with us</a>
        </div>
      </section>
       {/* <div className='container'>
       <div className="row p-5 mb-4 rounded-3">
       <div className="col-md-7">
         <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
         <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
       </div>
       <div className="col-md-5">
         <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
       </div>
       </div>
     </div> */}

     {/* <div className="container  marketing p-5 mb-4 rounded-3 bg-light" >
       <div className='row'>
         <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Expertise</h2>
           <p >Wisefolks Tech has worked in providing engineering and technical talent with the most pertinent aptitudes and experience to customers, over a few industry sectors. Regardless of whether it’s mining, Energy, Oil & Gas, rail, development or aviation, Wisefolks Tech have a background marked by sourcing skilled, qualified staff and contractors for projects anywhere in the world.</p>
           
         </div>
         <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Responsibility</h2>
           <p >Wisefolks Technologies has worked in providing engineering and technical talent with the most pertinent aptitudes and experience to customers, over a few industry sectors. Regardless of whether it’s mining, Energy, Oil & Gas, rail, development or aviation, Wisefolks Tech have a background marked by sourcing skilled, qualified staff and contractors for projects anywhere in the world</p>
           
         </div>
         <div className="col-lg-4 text__justify">
           <h2 className='text-center'>Culture</h2>
           <p >Wisefolks Technologies has worked in providing engineering and technical talent with the most pertinent aptitudes and experience to customers, over a few industry sectors. Regardless of whether it’s mining, Energy, Oil & Gas, rail, development or aviation, Wisefolks Tech have a background marked by sourcing skilled, qualified staff and contractors for projects anywhere in the world.</p>
         </div>
       </div>
     </div> */}
     
  

{/* 
     <div className="container   marketing p-5 mb-4 rounded-3 bg-light">
       <div className='row'>
         <div className="col-md-6">
           <div className="h-100 p-5 text-white bg-dark rounded-3">
             <h2>Change the background</h2>
             <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
             <button className="btn btn-outline-light" type="button">Example button</button>
           </div>
         </div>
         <div className="col-md-6">
           <div className="h-100 p-5 bg-light border rounded-3">
             <h2>Add borders</h2>
             <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
             <button className="btn btn-outline-secondary" type="button">Example button</button>
           </div>
         </div>
       </div>
     </div> */}
               
    </>
  )
}

export default Contant
