import React from 'react';
import { AiFillFacebook,AiFillTwitterCircle,AiFillGooglePlusCircle,AiFillInstagram } from 'react-icons/ai';

const Strap = () => {
  return (
   <>
   <div className='topbar topbar-dark bg-dark'>
       <div className='container d-md-flex align-items-center px-0 px-xl-3'>
            <div className="d-none d-md-block text-nowrap me-3">
                <i className="ai-phone fs-base text-muted me-1 align-middle"></i>
                <span className="text-light me-2 fs-5 text-center">Support</span><i className=" topbar-link me-1 text-light " href="tel:9107848015">+1 346-318-4150</i>
           </div>
           <div className='d-flex text-md-end ms-md-auto'>
                <div  className="btn-group me-2" role="group" aria-label="First group">
                    <a href='# ' type="button" className="btn"><AiFillInstagram className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a href='# ' type="button" className="btn"><AiFillFacebook className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a href='# '  type="button" className="btn"><AiFillTwitterCircle className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a href='# ' type="button" className="btn"><AiFillGooglePlusCircle  color="#e8e8e8" className="fs-3"/></a>
                </div>  
           </div>
       </div>
   </div>

   </>
  )
}

export default Strap