import ProjectCard from "./ProjectCard";

function Project(){
   return <section className="projects" id="projects">
  <h2 className="projects-title">Projects</h2>

  <div className="projects-grid">

    <ProjectCard 
    name="empowHER - Women Empowerment Platform" 
    description="Built a responsive React based platform during a 72 hour hackathon focused on women’s health, career support, financial literacy, and community resources. Designed modular component architecture with scalable structure and mobile first responsiveness."
     gitLink = "https://github.com/Sanjeeth-Sanju/empowHER.git" liveLink = "https://empowher-w7y6.onrender.com" 
    />

    <ProjectCard 
    name="Cinemaah-Scribbles - Full Stack Movie Diary" 
    description="Developed a full-stack web application with admin-only CRUD operations, TMDb API integration, and PostgreSQL database. Implemented server-side rendering using EJS and secured environment variables using .env configuration."
     gitLink = "https://github.com/Sanjeeth-Sanju/cinemaah-scribbles.git" liveLink = "https://cinemaahscribbles.live/" 
    /> 

    <ProjectCard 
    name="WeatheryCast - Weather Forecast Web Application" 
    description="Built a real-time weather application using Node.js, Express, and EJS with OpenWeather API integration. Implemented backend API handling, dynamic rendering, and error management for unsupported locations."
     gitLink = "https://github.com/Sanjeeth-Sanju/WeatheryCast.git" liveLink = "https://weatherycast.onrender.com" 
    />       
  </div>
</section>

}
export default Project;