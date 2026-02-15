function ProjectCard(props){
    return <div className="project-card">
      <h3 className="project-name">{props.name}</h3>

      <p className="project-desc">{props.description}</p>

      <div className="project-links">
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer">GitHub</a>
{props.liveLink && (
  <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
    Live
  </a>
)}
      </div>
    </div>
}
export default ProjectCard;