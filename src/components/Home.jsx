import image from "../assets/profile.jpg";

function Home(){
    return <section className="home" id="home">

        <div className="homeLeft">
          
        <p>👋🏼 Hello, I'm </p>
        <span className="homeName">Sanjeeth</span>
        <h2>Full Stack Developer</h2>
        <p>I build scalable, performance driven web applications using modern full stack technologies.
Passionate about clean architecture, structured data flow, and intuitive user experiences.
Constantly learning, refining, and shipping real world solutions.</p>
        
        <div className="home-buttons">
           <a href="#projects" className="primary">View Projects</a>
           <a href="/resume.pdf" download="Sanjeeth_Resume.pdf" className="secondary">Download Resume</a>
        </div>
        </div>

        <div className="homeRight">
        <img src = {image} alt = "sanjeeth's profile photo" loading="lazy"/>
        </div>
    </section>
}
export default Home;