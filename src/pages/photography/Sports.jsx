import { Link } from 'react-router-dom';

const Sports = () => {
  // Column 1 Images
  const col1 = [
    "/assets/img/photos/sports/7.jpg",
    "/assets/img/photos/sports/28.jpg",
    "/assets/img/photos/sports/29.jpg",
    "/assets/img/photos/sports/10.jpg",
    "/assets/img/photos/sports/19.jpg"
  ];

  // Column 2
  const col2 = [
    "/assets/img/photos/sports/22.jpg",
    "/assets/img/photos/sports/24.jpg",
    "/assets/img/photos/sports/12.jpg",
    "/assets/img/photos/sports/17.jpg",
    "/assets/img/photos/sports/30.jpg"
  ];

  // Column 3
  const col3 = [
    "/assets/img/photos/sports/11.jpg",
    "/assets/img/photos/sports/16.jpg",
    "/assets/img/photos/sports/9.jpg",
    "/assets/img/photos/sports/14.jpg",
    "/assets/img/photos/sports/15.jpg",
    "/assets/img/photos/sports/18.jpg"
  ];

  return (
    <main id="main">
      <div style={{ height: '175px' }}></div>

      <h4 className="breadcrumb">
        <Link to="/creative/photography" style={{ color: '#000' }}>Photography</Link> &gt; Sports
      </h4>

      <div style={{ height: '50px' }}></div>

      <section id="photography" style={{ width: '100%', maxWidth: '1180px', margin: 'auto' }}>
        
        <h2>sports</h2>

        {/* The Grid */}
        <div className="photography-grid">
          <div className="three-columns">
            
            {/* Column 1 */}
            <div className="gallery-column">
              {col1.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Sports ${index}`} 
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="gallery-column">
              {col2.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Sports ${index}`} 
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="gallery-column">
              {col3.map((src, index) => (
                <img 
                  key={index} 
                  src={`${import.meta.env.BASE_URL}${src.substring(1)}`} 
                  className="grid-item" 
                  loading="lazy" 
                  alt={`Sports ${index}`} 
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

export default Sports;