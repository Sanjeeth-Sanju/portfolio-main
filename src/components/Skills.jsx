import React from "react";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-group">
        <div>        
          <h3 className="skills-sub">Frontend</h3>
        <div className="skill-tags">
          <span className="skill-badge html">HTML5</span>
          <span className="skill-badge css">CSS3</span>
          <span className="skill-badge js">JavaScript</span>
          <span className="skill-badge react">React</span>
        </div>
        </div>

       <div>
        <h3 className="skills-sub">Backend</h3>
        <div className="skill-tags">
          <span className="skill-badge node">Node.js</span>
          <span className="skill-badge node">EJS</span>
          <span className="skill-badge express">Express</span>
          <span className="skill-badge api">REST API</span>
        </div>
        </div>
      
      <div>
        <h3 className="skills-sub">Database</h3>
        <div className="skill-tags">
          <span className="skill-badge mysql">MySQL</span>
          <span className="skill-badge postgres">PostgreSQL</span>
        </div>
      </div>

      <div>
        <h3 className="skills-sub">Tools</h3>
        <div className="skill-tags">
          <span className="skill-badge git">Git</span>
          <span className="skill-badge github">GitHub</span>
          <span className="skill-badge postman">Postman</span>
          <span className="skill-badge render">Render</span>
          <span className="skill-badge vscode">VS Code</span>
        </div>
      </div>
      </div>

    </section>
  );
}

export default Skills;
