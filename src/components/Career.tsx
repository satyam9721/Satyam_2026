import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Jio (NHQ – Mumbai)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and implemented multiple RESTful APIs for Jio's flagship
              products. Worked on JAM & Zabbix using Node.js, Express.js,
              MongoDB, Nginx, and Docker. Resolved node maintenance &
              availability issues, extracted critical metrics and alarm data
              from databases, and delivered features for Jio Saavn using agile
              methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Sphere Global (U.K) – Mohali</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built H2NET, a scalable enterprise-grade app using React.js,
              Tailwind CSS, Node.js, Express, and MongoDB. Implemented secure
              REST APIs with role-based auth, AWS deployment (EC2, Amplify,
              CI/CD), and integrations with Neos, PXC & Virtual-1. Also
              developed Shodan's Clone & Breachwise — a hacker's search engine
              using the MERN stack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Teacher</h4>
                <h5>YouTube (Part-Time)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Creating engaging YouTube content on tech tips, tricks, unboxing,
              and in-depth reviews of newly launched products. Providing
              technical insights into the science behind the latest gadgets and
              innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
