import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">

          <div className="company-tags">
            <span className="tag jio">Ex-Jio</span>
          </div>

          <p className="para">
            Backend Developer with 2+ years of experience building scalable
            and high-performance applications using Node.js, Golang, React.js and the
            MERN stack. Experienced in designing RESTful APIs, microservices architecture,
            and distributed systems using MongoDB, PostgreSQL, Redis and RabbitMQ.
            Skilled in cloud deployment using AWS, Docker, Nginx, Linux and CI/CD
            pipelines. Previously worked at <strong>Jio</strong> and currently contributing
            to enterprise-grade platforms at Sphere Global.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
