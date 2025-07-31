import React from 'react'
// import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
    <div className='col-md-4 col-sm-6 col-12'>
  <div className="card h-100">
    <img src={props.imgSrc} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.titile}</h5>
      <p className="card-text">{props.description}</p>
      {props.list && (
        <ul className="list-group list-group-flush">
          <h5 className='pt-3'>What We Offer:</h5>
          <li className="list-group-item">Real-time conversational AI integration</li>
          <li className="list-group-item">Multi-language chatbot support</li>
          <li className="list-group-item">Custom workflow automation with AI</li>
          <li className="list-group-item">Multi-language chatbot support</li>
          <li className="list-group-item">Integration with your existing systems or platforms</li>
        </ul>
      )}
    </div>
  </div>
</div>

    </>
  )
}

export default Card