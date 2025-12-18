import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'doodle-captioning',
      title: "Doodle Captioning",
      image: "/assets/img/projects/doodle.jpg",
      year: "2025"
    },
    {
      id: 'bug-enrichment',
      title: "Bug Enricher",
      image: "/assets/img/projects/gcp.jpg", 
      year: "2025"
    },
    {
      id: 'linktune',
      title: "LinkTune",
      image: "/assets/img/projects/linktune.jpg",
      year: "2024"
    }
  ];

  return (
    <main id="main">
      <div style={{ height: '225px' }}></div>

      <section className="projects-section">
        
        {/* Header */}
        <div className="projects-header">
          <h2>projects</h2>
          <p>
            internship & personal tech projects!
          </p>
        </div>

        {/* Projects List (Single Column) */}
        <div className="projects-list">
          
          {projects.map((project) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id} 
              className="project-link"
            >
              <div className="project-card">
                
                {/* Image Container */}
                <div className="project-image-container">
                  {/* Uncomment image below when you have real files */}
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>

                {/* Text Info */}
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.year}</p>

              </div>
            </Link>
          ))}

        </div>

      </section>

      <div style={{ height: '100px' }}></div>
    </main>
  );
};

export default Projects;