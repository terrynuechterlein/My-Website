import AboutImage from "../../assets/AboutImage.jpg";
import SIP from "../../assets/SIP_preview.mp4";
import CV from "../../assets/TerryNuechterlein_Resume.pdf";
import {FiDownload} from "react-icons/fi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About_Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <div className="about__content">
            <p>
              Hello! I am a graduate from Kalamazoo College with a masters in
              Computer Science and a concentration in Film and Media. I have had
              two amazing internships as a software engineer intern with
              Aunalytics (Kalamazoo), and as a video editing intern with
              Blowback Productions (New York). Im seeking to enter the tech
              industry as a junior developer. Most of my experience is within
              frontend with moderate experience in Backend. I welcome any
              opportunity to gain knowledge and build on my skills. Feel free to
              click the trailer playing to the right if you're interested in
              learning more about my backstory.
            </p>

            <div className="about__video-container">
              <h6>Documentary</h6>
              <small>Senior Individualized Project</small>
              <div className="about__video">
                <a
                  href="https://drive.google.com/file/d/1yb_WbWhtEiktLpFVOnSnQBzE3tmYoap2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <video src={SIP} autoPlay loop muted />
                </a>
              </div>
            </div>
          </div>
          <a href={CV} download className="btn primary">
            Download CV <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
