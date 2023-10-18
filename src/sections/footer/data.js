import LinkedInIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import HandshakeIcon from "../../assets/handshake.png";

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#work-experience', title: 'Work Experience'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
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
]