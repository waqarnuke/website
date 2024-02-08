import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='my-5'>
          <h1 className='text-center'>Contact US</h1>
        </div>
        <h1 className='text-center my-5'>How can we help you? </h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className="delaware-section-title  delaware_title-type-4 row">
                  <h3 className="col-xs-12 col-sm-12 title no-underline">Contact Our Office </h3>
            </div>
            <div className="sub-title">
                If you have any querry for related Consulting Our customer support team available 24/7, please contact them.</div><br/>
            
              <p class="fw-bold mb-0">Address:<span class="ms-2 fw-normal">100 Glenborough Dr Suite 544, Houston, TX - 77067 </span></p>
              <p class="fw-bold mb-0">Phone:<span class="ms-2 fw-normal"><a class="text-700" href="tel:+13234324534">+1 (346) 318 4150</a></span></p>
              <p class="fw-bold mb-4">E-mail:<span class="ms-2 fw-normal fst-italic"><a class="text-700" href="mailto:info@softcygnus.com">contactus@softcygnus.com</a></span></p>
                {/* <ul className="address-ct-box">
                  <li>12800 Northbrough Dr Houston, TX - 77067 </li>
                  <li><span>Call Us: </span>+1 (346) 318 4150</li>
                  <li><span>Mail Us at: </span>info@softcygnus.com</li>
                  </ul> */}
          </div>
          <div className='col-md-6'>
            <div className='list-group w-auto'>
            <a  className="list-group-item list-group-item-action d-flex gap-3 py-3" href='#!'>
              <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M14.486 18l-1.689 3.057a1 1 0 01-1.708.069L9.017 18H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3h-4.514z" fill="#335EEA" opacity=".3"></path><path d="M6 7h9a1 1 0 010 2H6a1 1 0 110-2zm0 4h5a1 1 0 010 2H6a1 1 0 010-2z" fill="#335EEA" opacity=".3"></path></g></svg>    
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">Live chat</h6>
                  <p className="mb-0 opacity-75">Wait time of ~10 minutes.</p>
                </div>
                <small className="opacity-50 text-nowrap">now</small>
              </div>
              </a>

              <a  className="list-group-item list-group-item-action d-flex gap-3 py-3" href='#!'>
              <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M6 2h12a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm1.5 3a.5.5 0 000 1h6a.5.5 0 100-1h-6zm0 2a.5.5 0 000 1h3a.5.5 0 100-1h-3z" fill="#335EEA" opacity=".3"></path><path d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z" fill="#335EEA"></path></g></svg>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">Email us</h6>
                  <p className="mb-0 opacity-75">We reply in ~24 hours.</p>
                </div>
                <small className="opacity-50 text-nowrap">now</small>
              </div>
              </a>

              <a  className="list-group-item list-group-item-action d-flex gap-3 py-3" href='#!'>
              <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M13.08 14.784l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.801.13l1.104 2.208a4.387 4.387 0 01-.822 5.065l-5.999 5.998a5.427 5.427 0 01-5.553 1.311l-2.415-.804a.5.5 0 01-.195-.828l2.65-2.652a2 2 0 012.31-.374l.25.125a2 2 0 002.308-.375z" fill="#335EEA"></path><path d="M14.148 6.007l-.191 1.991a4.987 4.987 0 00-4.018 1.441 4.987 4.987 0 00-1.442 4.004l-1.992.185a6.986 6.986 0 012.02-5.603 6.987 6.987 0 015.623-2.018zm.35-3.985l-.185 1.992A8.978 8.978 0 007.111 6.61a8.978 8.978 0 00-2.598 7.191l-1.992.183a10.977 10.977 0 013.176-8.788 10.977 10.977 0 018.801-3.175z" fill="#335EEA" opacity=".3"></path></g></svg>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">Call</h6>
                  <p className="mb-0 opacity-75">7am - 7pm CST.</p>
                </div>
                <small className="opacity-50 text-nowrap">now</small>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>    
      
      {/* <div className='container contact_duv'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
            <div className="mb-3">
              <label for="fullNameFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="FullNameFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
              <label for="PhoneNumberFormControlInput1" className="form-label">Phone</label>
              <input type="Number" className="form-control" id="PhoneNumberFormControlInput1" placeholder="Phone Number"/>
            </div>
            <div className="mb-3">
              <label for="EmailFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="EmailFormControlInput1" placeholder="mail@example.com"/>
            </div>
            <div className="mb-3">
              <label for="MessageFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="MessageFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Contact