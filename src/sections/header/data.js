import LinkedInIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import HandshakeIcon from "../../assets/handshake.png";

const data = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/terry-nuechterlein-64661818a/",
    icon: (
      <img
        src={LinkedInIcon}
        alt="LinkedIn"
        style={{width: "30px", height: "30px"}}
      />
    ),
  },
  {
    id: 2,
    link: "https://app.joinhandshake.com/stu/users/20422738",
    icon: (
      <img
        src={HandshakeIcon}
        alt="Handshake"
        style={{width: "30px", height: "30px"}}
      />
    ),
  },
  {
    id: 3,
    link: "https://github.com/terrynuechterlein",
    icon: (
      <img
        src={GithubIcon}
        alt="Github"
        style={{width: "30px", height: "30px"}}
      />
    ),
  },
];

export default data;
