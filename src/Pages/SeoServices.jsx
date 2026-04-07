import React from "react";
import {
  AiOutlineSearch,
  AiOutlineLink,
  AiOutlineTool,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineBulb,
  AiOutlineBuild,
  AiOutlineLineChart,
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import "./SeoServices.css";

const SeoServices = () => {
  return (
    <div className="container py-5">
      {/* HERO */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold">SEO Services</h1>
          <p className="text-muted">
            Grow Your Business with Professional SEO Services
          </p>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            We help businesses improve their online visibility, rank higher on
            search engines, and attract targeted traffic that converts into real
            customers. Our SEO strategies are tailored to your business goals
            and designed for long-term growth.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">Our SEO Services</h3>

          <div className="row g-4">
            {[
              {
                icon: <AiOutlineSearch />,
                title: "On-Page SEO",
                desc: "We optimize your website structure, meta tags, headings, and internal linking to improve search engine visibility and user experience.",
              },
              {
                icon: <AiOutlineLink />,
                title: "Off-Page SEO",
                desc: "We build high-quality backlinks from authoritative websites to improve your domain authority and boost rankings.",
              },
              {
                icon: <AiOutlineTool />,
                title: "Technical SEO",
                desc: "We enhance website speed, mobile responsiveness, indexing, and fix technical issues that affect performance.",
              },
              {
                icon: <AiOutlineFileText />,
                title: "Content Optimization",
                desc: "We create and optimize SEO-friendly content that engages users and ranks well on search engines.",
              },
              {
                icon: <AiOutlineBarChart />,
                title: "SEO Audit",
                desc: "Comprehensive analysis of your website to identify issues, opportunities, and actionable improvements.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card service-card h-100 text-center p-4 border-0 shadow-sm">
                  <div className="fs-1 text-primary mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUAL SEO */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="p-4 p-md-5 bg-white rounded shadow-sm">
            <h3 className="fw-bold mb-3">🛠️ 100% Manual SEO Work</h3>
            <p className="text-muted">
              We believe in delivering high-quality results through 100% manual
              SEO practices. All our link-building and optimization tasks are
              performed by experienced professionals—not automated software or
              bots.
            </p>
            <p className="text-muted">
              This ensures that every backlink is carefully placed, relevant to
              your niche, and follows search engine guidelines. Unlike automated
              tools that create spammy links, our approach focuses on quality,
              accuracy, and long-term value.
            </p>
            <p className="text-muted mb-0">
              Our manual SEO process protects your website from penalties,
              improves indexing, and delivers sustainable growth over time.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Why Choose Us?</h3>

          <div className="row g-4 justify-content-center">
            {[
              "Proven SEO strategies with measurable results",
              "Experienced and skilled team",
              "Focus on long-term success",
              "Transparent reporting and communication",
              "White-hat SEO techniques",
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-3 bg-light rounded shadow-sm h-100">
                  <p className="mb-0 text-muted">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Our Process</h3>
          <p className="text-muted mb-5">
            Our structured SEO process ensures consistent growth and measurable
            improvements in your website performance.
          </p>

          <div className="row g-4 justify-content-center">
            {[
              { icon: <AiOutlineSearch />, text: "Analysis" },
              { icon: <AiOutlineBarChart />, text: "Keyword Research" },
              { icon: <AiOutlineBulb />, text: "Strategy" },
              { icon: <AiOutlineBuild />, text: "Implementation" },
              { icon: <AiOutlineLineChart />, text: "Optimization" },
            ].map((step, i) => (
              <div className="col-md-2 col-6" key={i}>
                <div className="process-card">
                  <div className="fs-2 text-primary mb-2">{step.icon}</div>
                  <h6>{step.text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Contact Us</h3>
            <p className="text-muted">
              Ready to boost your rankings and grow your business? <br />
              Get in touch with us for your SEO and IT needs
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="contact-card text-center p-5 shadow-sm"
              style={{ maxWidth: "500px", width: "100%", borderRadius: "12px" }}
            >
              <div className="mb-4">
                <AiOutlineEnvironment className="fs-2 text-primary mb-2" />
                <h5>Address</h5>
                <p className="text-muted mb-0">
                  100 Glenborough Dr Suite 544 <br />
                  Houston, TX 77067
                </p>
              </div>

              <hr />

              <div className="mb-4">
                <AiOutlinePhone className="fs-2 text-primary mb-2" />
                <h5>Phone</h5>
                <a
                  href="tel:+13463184150"
                  className="text-muted text-decoration-none"
                >
                  +1 (346) 318 4150
                </a>
              </div>

              <hr />

              <div>
                <AiOutlineMail className="fs-2 text-primary mb-2" />
                <h5>Email</h5>
                <a
                  href="mailto:contactus@softcygnus.com"
                  className="text-muted text-decoration-none"
                >
                  contactus@softcygnus.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;