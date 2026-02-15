import React from "react";

function About(){
   return <section className="about" id="about">
    <h2 className="about-title">About</h2>
    <p className="about-text">
        I’m a B.Tech graduate focused on building practical and reliable web applications. I approach development with discipline and consistency, always aiming to improve with every project I work on.
    </p>

    <p className="about-text">
        Over time, I’ve learned to think beyond just writing code. I pay attention to structure, data flow, and how the frontend and backend connect to create a complete system. I enjoy understanding how things work internally rather than just making them look good.
    </p>

    <p className="about-text">
        I believe growth comes from building real projects, debugging problems patiently, and refining mistakes. Each project I complete strengthens my confidence and clarity as a developer.
        </p>

    <p className="about-text">
    My goal is to build a stable and strong career in full-stack development while continuously improving both technically and personally.
    </p>
    
    <div className="edu">
        <h3 className="edu-title">Education</h3>
        <div className="card">
            <div className="subCard">
                <h4>B.Tech in CSE (Core)</h4>
                <h4>2021 – 2025</h4>
            </div>
            <h5>Vellore Institute of Technology, AP Campus</h5>
            <p>CGPA: 7.14</p>
        </div>
        <div className="card">
            <div className="subCard">
                <h4>Higher Secondary (Class 12)</h4>
                <h4>2018 – 2020</h4>
            </div>
            <h5>Maharishi Vidhya Mandir Senior Sec. School, Hosur</h5>
            <p>Percentage: 80.2%</p>
        </div>
        <div className="card">
            <div className="subCard">
                <h4>SSLC (Class 10)</h4>
                <h4>2016 – 2018</h4>
            </div>
            <h5>Sri Vijay Vidyalaya Matric Hr. Sec. School, Krishnagiri</h5>
            <p>Percentage: 96%</p>
        </div>
    </div>
     
   </section>
}
export default About;
