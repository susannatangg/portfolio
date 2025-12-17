import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {

  const tileStyle = (imageUrl, position = 'center') => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgray' // Fallback color while image loads
  });

  const titleStyle = {
    // color: 'white',
    // fontWeight: 'bold'
  };

  return (
    <>
      <Hero />
      <main id="main">
        <div style={{ height: '100px' }}></div>

        <div className="home-items-container">
          {/* Projects Tile */}
          <div className="home-item">
            <Link to="/projects">
              <div 
                className="home-item-inner" 
                id="projects" 
                style={tileStyle('/assets/photography.jpg', '85% center')}
              >
                <h4 className="home-item-title" style={titleStyle}>Projects</h4>
              </div>
            </Link>
          </div>

          {/* Creative Tile */}
          <div className="home-item">
            <Link to="/creative">
              <div 
                className="home-item-inner" 
                id="projects" 
                style={tileStyle('/assets/photography.jpg')}
              >
                <h4 className="home-item-title" style={titleStyle}>Creative</h4>
              </div>
            </Link>
          </div>

          {/* About Tile */}
          <div className="home-item">
            <Link to="/about">
              <div 
                className="home-item-inner" 
                id="projects" 
                style={tileStyle('/assets/about.jpg')}
              >
                <h4 className="home-item-title" style={titleStyle}>About</h4>
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