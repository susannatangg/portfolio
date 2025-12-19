import { Link } from 'react-router-dom';

const Portrait = () => {
  // These stay clean - no need to change every single line here!
  const col1 = [
    "/assets/img/photos/portraits/26.jpg",
    "/assets/img/photos/portraits/37.jpg",
    "/assets/img/photos/portraits/13.jpg",
    "/assets/img/photos/portraits/32.jpg"
  ];

  const col2 = [
    "/assets/img/photos/portraits/36.jpg",
    "/assets/img/photos/portraits/21.jpg",
    "/assets/img/photos/portraits/23.jpg",
    "/assets/img/photos/portraits/35.jpg",
    "/assets/img/photos/portraits/34.jpg"
  ];

  const col3 = [
    "/assets/img/photos/portraits/30.jpg",
    "/assets/img/photos/portraits/38.jpg",
    "/assets/img/photos/portraits/31.jpg",
    "/assets/img/photos/portraits/33.jpg"
  ];

  return (
    <main id="main">
      <div style={{ height: '175px' }}></div>

      <h4 className="breadcrumb">
        <Link to="/creative/photography" style={{ color: '#000' }}>Photography</Link> &gt; Portraits
      </h4>

      <div style={{ height: '50px' }}></div>

      <section id="photography" style={{ width: '100%', maxWidth: '1180px', margin: 'auto' }}>
        
        <h2>portraits</h2>

        {/* The Grid */}
        <div className="photography-grid">
          <div className="three-columns">
            
            {/* Column 1 - Prefix added in the map */}
            <div className="gallery-column">
              {col1.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Portrait ${index}`} 
                />
              ))}
            </div>

            {/* Column 2 - Prefix added in the map */}
            <div className="gallery-column">
              {col2.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Portrait ${index}`} 
                />
              ))}
            </div>

            {/* Column 3 - Prefix added in the map */}
            <div className="gallery-column">
              {col3.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Portrait ${index}`} 
                />
              ))}
            </div>

          </div>
        </div>

      </section>

      <div style={{ height: '80px' }}></div>
    </main>
  );
};

export default Portrait;