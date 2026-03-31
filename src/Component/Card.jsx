import React from 'react';

const Card = ({ icon, title, description, features }) => {
  return (
    <div className='col-md-4 col-sm-6 col-12'>
      <div className="card h-100 border-0 shadow-sm service-card">
        
        <div className="card-body text-start p-4">

          {/* Icon */}
          <div className="mb-3 service-icon">
            {icon}
          </div>

          {/* Title */}
          <h5 className="card-title fw-bold">{title}</h5>

          {/* Description */}
          <p className="card-text text-muted">{description}</p>

          {/* Features List (Optional) */}
          {features && (
            <div className="mt-3 text-start">
              <h6 className='fw-bold'>What We Offer:</h6>
              <ul className="list-unstyled small text-muted">
                {features.map((item, index) => (
                  <li key={index} className="mb-1">✔ {item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Card;