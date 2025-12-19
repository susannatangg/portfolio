import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'doodle-captioning',
      title: "Doodle Captioning",
      description: (
        <>
            A novel deep learning vision-language model for captioning abstract freehand sketches. 
            This model has a ResNet-50 encoder and an LSTM decoder, fine-tuned for sketch-to-text 
            translation and optimized to generate contextually accurate captions. See {" "}
            <a 
              href="https://drive.google.com/file/d/1Z2vFyng2d9cvdatTG38FqCspk3gctzy_/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              demonstration
            </a>!
          </>
          ),
      image: `${import.meta.env.BASE_URL}assets/img/projects/doodle.jpg`,
      year: (<>2025 — <i>python, pytorch</i></>)
    },
    {
      id: 'bug-enrichment',
      title: "Bug Enricher",
      description: (
          <>
            During my software engineering internship at Google, I developed a system that enriches bugs by providing contexual insights directly into the bug ticket as well as automating debugging steps. 
            I engineered a scalable, modular routing system that integrated Gemini and internal job schedulers, 
            ultimately reducing bug resolution time by 99.81% (from 180 hours to just 20 minutes)!
          </>
        ),
      image: `${import.meta.env.BASE_URL}assets/img/projects/gcp.jpg`, 
      year: (<>2025 — <i>python, gcp</i></>)
    },
    {
      id: 'linktune',
      title: "LinkTune",
      description: (
          <>
            A social iOS application that curates personalized music playlists by aggregating song recommendations from a user's network of followers. 
            We engineered a scalable Firestore database with real-time event listeners to synchronize social feeds and managed datasets 
            to provide efficient song search functionality. See {" "}
            <a 
              href="https://devpost.com/software/linktune" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              demonstration
            </a>!
          </>
        ),
      image: `${import.meta.env.BASE_URL}assets/img/projects/linktune.jpg`,
      year: (<>2025 — <i>swift, xcode, firebase, firestore</i></>)
    }
  ];

  return (
    <main id="main">
      <div style={{ height: '225px' }}></div>

      <section className="projects-section">
        <div className="projects-header">
          <h2>projects</h2>
          <p>internship & personal tech projects!</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Left Side: Image */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              {/* Right Side: Text Info */}
              <div className="project-info">
                <div className="project-meta">
                  <h3 className="project-name">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '100px' }}></div>
    </main>
  );
};

export default Projects;