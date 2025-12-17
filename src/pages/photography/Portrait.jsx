import { Link } from 'react-router-dom';

const Portrait = () => {
  // Column 1 Images
  const col1 = [
    "/img/photos/portraits/26.jpg",
    "/img/photos/portraits/37.jpg",
    "/img/photos/portraits/13.jpg",
    "/img/photos/portraits/32.jpg"
  ];

  // Column 2
  const col2 = [
    "/img/photos/portraits/36.jpg",
    "/img/photos/portraits/21.jpg",
    "/img/photos/portraits/23.jpg",
    "/img/photos/portraits/35.jpg"
  ];

  // Column 3
  const col3 = [
    "/img/photos/portraits/30.jpg",
    "/img/photos/portraits/38.jpg",
    "/img/photos/portraits/31.jpg",
    "/img/photos/portraits/33.jpg"
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
            
            {/* Column 1 */}
            <div className="gallery-column">
              {col1.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Portrait ${index}`} 
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="gallery-column">
              {col2.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Portrait ${index}`} 
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="gallery-column">
              {col3.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
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