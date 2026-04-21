import React from "react";
import {
  AiOutlineCode,
  AiOutlineMail,
  AiOutlineTool,
  AiOutlineCheckCircle,
  AiOutlineTeam,
  AiOutlineRocket,
} from "react-icons/ai";

const serviceItems = [
  {
    title: "Veeva CLM HTML Development",
    icon: <AiOutlineCode className="fs-2 text-primary" />,
    description:
      "Interactive Veeva CLM presentations developed in HTML with clean structure, consistent styling, and agency-ready delivery.",
  },
  {
    title: "Veeva Approved Email Development",
    icon: <AiOutlineMail className="fs-2 text-primary" />,
    description:
      "Responsive Approved Email builds designed for readability, brand consistency, and production-ready handoff.",
  },
  {
    title: "Content Updates & Revisions",
    icon: <AiOutlineTool className="fs-2 text-primary" />,
    description:
      "Support for reference updates, content revisions, brand refreshes, and campaign extensions across existing Veeva assets.",
  },
  {
    title: "QA & Deployment Readiness",
    icon: <AiOutlineCheckCircle className="fs-2 text-primary" />,
    description:
      "Structured review for layouts, links, responsiveness, and final delivery readiness before deployment.",
  },
  {
    title: "Agency Overflow Support",
    icon: <AiOutlineTeam className="fs-2 text-primary" />,
    description:
      "Flexible delivery support for agencies that need reliable Veeva execution capacity across client projects.",
  },
  {
    title: "Ongoing Production Support",
    icon: <AiOutlineRocket className="fs-2 text-primary" />,
    description:
      "Dependable support for recurring Veeva production work, ongoing updates, and turnaround-sensitive requests.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Review",
    description:
      "We review source files, design intent, content needs, timelines, and delivery expectations.",
  },
  {
    step: "02",
    title: "HTML Development",
    description:
      "Our team builds CLM presentations and Approved Emails with clean code and consistent execution.",
  },
  {
    step: "03",
    title: "QA & Refinement",
    description:
      "We validate layout behavior, links, responsiveness, and requested revisions before handoff.",
  },
  {
    step: "04",
    title: "Delivery Support",
    description:
      "Final assets are prepared for agency/client review with a dependable, production-oriented handoff.",
  },
];

export default function VeevaServices() {
  return (
    <main>
      <section className="py-5 bg-light border-bottom">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2">
                Life Sciences Digital Services
              </span>
              <h1 className="display-5 fw-bold mb-3">
                Veeva CLM & Approved Email Development Services
              </h1>
              <p className="lead text-muted mb-4">
                Soft Cygnus provides Veeva-focused HTML development support for agencies and life sciences teams. We build and update Veeva CLM presentations and Approved Emails with clean code, responsive layouts, and reliable delivery aligned to agency timelines.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="/Contact" className="btn btn-primary btn-lg px-4">
                  Request a Consultation
                </a>
                <a href="/Service" className="btn btn-outline-dark btn-lg px-4">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bg-white shadow-sm border rounded-4 p-4">
                <h3 className="h4 fw-semibold mb-3">What we support</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">• Veeva CLM presentation development</li>
                  <li className="mb-3">• Veeva Approved Email HTML builds</li>
                  <li className="mb-3">• Content updates and production changes</li>
                  <li className="mb-3">• QA review and delivery support</li>
                  <li className="mb-0">• Flexible agency partnership model</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-muted mb-5">
            <h2 className="fw-bold mb-3">Our Veeva Services</h2>
            <p className="text-muted" style={{ maxWidth: "760px" }}>
              We help agencies and life sciences teams extend their delivery capacity with dependable support for Veeva-related HTML production work.
            </p>
          </div>

          <div className="row g-4">
            {serviceItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="h5 fw-semibold mb-3">{item.title}</h3>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Why agencies choose Soft Cygnus</h2>
              <p className="text-muted mb-4">
                We provide focused execution support for Veeva HTML work with an emphasis on consistency, responsiveness, and practical delivery. Whether you need help with one project or recurring production support, we work as a reliable extension of your team.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-3 h-100">
                    <h3 className="h6 fw-semibold">Clean HTML Delivery</h3>
                    <p className="text-muted mb-0 small">
                      Structured, maintainable front-end builds for Veeva assets.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-3 h-100">
                    <h3 className="h6 fw-semibold">Responsive Support</h3>
                    <p className="text-muted mb-0 small">
                      Fast support for revisions, updates, and turnaround-sensitive work.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-3 h-100">
                    <h3 className="h6 fw-semibold">Agency-Friendly Workflow</h3>
                    <p className="text-muted mb-0 small">
                      Easy collaboration for project-based, overflow, or recurring needs.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-3 h-100">
                    <h3 className="h6 fw-semibold">Dependable Handoff</h3>
                    <p className="text-muted mb-0 small">
                      QA-oriented delivery with attention to readiness and consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white border rounded-4 shadow-sm p-4 p-lg-5">
                <h2 className="fw-bold mb-4">How we work</h2>
                <div className="d-flex flex-column gap-4">
                  {processSteps.map((item, index) => (
                    <div key={index} className="d-flex gap-3 align-items-start">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                        style={{ width: "48px", height: "48px", minWidth: "48px" }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">{item.title}</h3>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-4">
          <div className="bg-primary text-white rounded-4 p-4 p-lg-5 text-center shadow-sm">
            <h2 className="fw-bold mb-3">Need Veeva production support?</h2>
            <p className="mb-4 mx-auto" style={{ maxWidth: "760px" }}>
              Soft Cygnus supports agencies and life sciences teams with Veeva CLM development, Approved Email HTML builds, ongoing revisions, and dependable delivery support.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="/Contact" className="btn btn-light btn-lg px-4">
                Contact Us
              </a>
              <a href="/Service" className="btn btn-outline-light btn-lg px-4">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
