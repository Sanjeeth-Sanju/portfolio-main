import ProjectCard from "./ProjectCard";

function Project(){
   return <section className="projects" id="projects">
  <h2 className="projects-title">Projects</h2>

  <div className="projects-grid">

    <ProjectCard 
    name="empowHER - Women Empowerment Platform" 
    description="Built a responsive React based platform during a 72 hour hackathon focused on women’s health, career support, financial literacy, and community resources. Designed modular component architecture with scalable structure and mobile first responsiveness."
     gitLink = "https://lnkd.in/gBBqJH4F" liveLink = "https://lnkd.in/gviFv_7D" 
    />

    <ProjectCard 
    name="Cinemaah-Scribbles - Full Stack Movie Diary" 
    description="Developed a full-stack web application with admin-only CRUD operations, TMDb API integration, and PostgreSQL database. Implemented server-side rendering using EJS and secured environment variables using .env configuration."
     gitLink = "https://lnkd.in/gGdYRnCR" liveLink = "https://lnkd.in/gSZVbHXy" 
    /> 

    <ProjectCard 
    name="Weather Forecast App" 
    description="Built a real-time weather application using Node.js, Express, and EJS with OpenWeather API integration. Implemented backend API handling, dynamic rendering, and error management for unsupported locations."
     gitLink = "https://lnkd.in/gAu_hKuv" liveLink = "https://lnkd.in/ggnwkeEW" 
    />       
  </div>
</section>

}
export default Project;