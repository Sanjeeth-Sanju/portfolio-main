import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';



function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-text">
       Actively seeking full time opportunities, internships or freelance opportunities as a Full Stack Developer.
        Feel free to reach out whether it's a project idea or a professional opportunity.
      </p>

      <div className="contact-links">
        <a href="mailto:sanjeeth022503@gmail.com" className="contact-link">
          <span className="link-icon mail"><MailIcon/></span> Email
        </a>

        <a 
          href="https://www.linkedin.com/in/b-sanjeeth/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="link-icon in"><LinkedInIcon/></span> LinkedIn
        </a>

        <a 
          href="https://github.com/Sanjeeth-Sanju"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="link-icon git"><GitHubIcon/></span> GitHub
        </a>

        <a 
          href="/resume.pdf"
          target="_blank"
          className="contact-link"
        >
          <span className="link-icon download"><DownloadIcon/></span> Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
