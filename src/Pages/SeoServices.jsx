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
            Boost your online presence and drive targeted traffic to your website with our expert SEO services. We help businesses rank higher on search engines like Google, attract quality leads, and increase conversions through proven strategies.
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
                icon: <AiOutlineTool />,
                title: "Technical SEO",
                desc: "We improve your website performance, speed, mobile-friendliness, and indexing for better rankings.",
              },
              {
                icon: <AiOutlineFileText />,
                title: "Content Optimization",
                desc: "We create SEO-friendly content that matches user intent and drives engagement.",
              },
              {
                icon: <AiOutlineBarChart />,
                title: "SEO Audit",
                desc: "We provide detailed audits to identify issues and optimize your SEO strategy.",
              },
              {
                icon: <AiOutlineLink />,
                title: "Off-Page SEO",
                desc: "We build high-quality backlinks from authoritative websites to improve your domain authority and boost rankings.",
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
            <h3 className="fw-bold mb-3">🔗 Off-Page SEO (Link Building)</h3>
            <p className="text-muted">
              We are committed to ethical and professional SEO practices. Please note that we do not provide services for websites or content related to:
            </p>
            <ul>
              <li><b>Guest Posting:</b> Publishing high-quality articles on relevant websites with backlinks</li>
              <li><b>PBN Links (Private Blog Network):</b> Carefully managed network links to boost </li>
              <li><b>Web 2.0 Links:</b> Creating content on web platforms to point backlinks to your site</li>
              <li><b>Blog Commenting:</b> Adding relevant comments on niche blogs for contextual backlinks</li>
              <li><b>Niche Blog Comments:</b> Targeted commenting on industry-specific blogs for better relevance</li>
              <li><b>Forum Submission:</b> Participating in forums and adding valuable links in discussions</li>
              <li><b>Profile Creation:</b> Creating profiles on trusted platforms with your website link</li>
              <li><b>Article Submission:</b> Submitting content to high-quality directories for exposure</li>
              <li><b>Social Bookmarking:</b> Sharing content on bookmarking platforms for indexing and traffic</li>
              <li><b>Sidebar Links:</b> Placing your website link in the sidebar section of relevant blogs or websites to gain consistent visibility and authority</li>
            </ul>
            <p className="text-muted mb-0">
              We focus on quality, relevance, and safe SEO practices to ensure long-term growth and stability.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="p-4 p-md-5 bg-white rounded shadow-sm">
            <h3 className="fw-bold mb-3">🚫 Service Policy & Restrictions</h3>
            <p className="text-muted">
              We are committed to ethical and professional SEO practices. Please note that we do not provide services for websites or content related to:
            </p>
            <ul>
              <li>Adult content or pornography</li>
              <li>Illegal activities or harmful content</li>
              <li>Any content that violates search engine guidelines or policies</li>
            </ul>
            <p className="text-muted mb-0">
              We reserve the right to refuse service to any website that does not meet our quality and ethical standards.
            </p>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default SeoServices;