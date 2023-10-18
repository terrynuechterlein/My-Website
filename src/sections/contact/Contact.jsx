import "./contact.css";
import email from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Feel free to shoot me an email if you'd like to connect!</p>
      <div className="container contact__container">
        {email.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer">
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
