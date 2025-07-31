import React from 'react';

const clients = [
  {
    name: 'ABC Hotels',
    project: 'Feedback System',
    page: '/feedback/form, /admin/feedback',
    technologies: 'Angular, .NET Core, SQL Server'
  },
  {
    name: 'XYZ Logistics',
    project: 'Barcode-Based Inventory Tracking',
    page: '/track-item, /admin/inventory',
    technologies: 'React, Node.js, MongoDB'
  },
  {
    name: 'CityGov Fire Dept.',
    project: 'Inspection & Alerts Dashboard',
    page: '/inspection-dashboard, /alerts',
    technologies: 'Angular, .NET Core, PostgreSQL'
  }
];

const ClientSection = () => {
  return (
    <section className="py-5 bg-light" id="clients">
      <div className="container">
        <h2 className="text-center mb-5">Our Clients & Projects</h2>
        <div className="row">
          {clients.map((client, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{client.name}</h5>
                  <p><strong>Project:</strong> {client.project}</p>
                  <p><strong>Pages:</strong> {client.page}</p>
                  <p><strong>Technologies:</strong> {client.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
