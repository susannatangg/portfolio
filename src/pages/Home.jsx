import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <div style={{ height: '100px' }}></div>

        <div className="home-items-container">
          {/* Projects Tile */}
          <div className="home-item">
            <Link to="/projects">
              <div className="home-item-inner" id="projects" style={{ background: 'lightgray' }}>
                <h4 className="home-item-title">Projects</h4>
              </div>
            </Link>
          </div>

          {/* Creative Tile */}
          <div className="home-item">
            <Link to="/creative">
              <div className="home-item-inner" id="creative" style={{ background: 'lightgray' }}>
                <h4 className="home-item-title">Creative</h4>
              </div>
            </Link>
          </div>

          {/* About Tile */}
          <div className="home-item">
            <Link to="/about">
              <div className="home-item-inner" id="about-tile" style={{ background: 'lightgray' }}>
                <h4 className="home-item-title">About</h4>
              </div>
            </Link>
          </div>
        </div>

        <div style={{ height: '100px' }}></div>
      </main>
    </>
  );
};

export default Home;