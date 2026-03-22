import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:satyamjio1456@gmail.com" data-cursor="disable">
                satyamjio1456@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918445630698" data-cursor="disable">
                +91 8445630698
              </a>
            </p>
            <h4>Address</h4>
            <p>Delhi, India</p>
            <h4>Education</h4>
            <p>
              B.Tech in Information Technology<br />
              Dr. Ambedkar Institute of Technology, Kanpur (AKTU)<br />
              2019 – 2023 &nbsp;|&nbsp; 8.0 CGPA
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/satyam9721"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/satyam-gupta-9580141b9"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Satyam Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
