import React from 'react'

function Projects() {
  const projectList = [
    {
      title: "Construction Company Website",
      description: "A dynamic website built using HTML, CSS, JavaScript, Node.js, and MongoDB for a real-world construction company.",
      link: "#"
    },
    {
      title: "To-Do List App",
      description: "A simple React app to manage daily tasks with add/delete functionality and local storage.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing — built using React and Bootstrap!",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-outline-primary" target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
