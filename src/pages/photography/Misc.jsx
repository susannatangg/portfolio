import { Link } from 'react-router-dom';

const Misc = () => {
  // Column 1 Images
  const col1 = [
    "/assets/img/photos/other/8.jpg",
    "/assets/img/photos/other/7.jpg",
    "/assets/img/photos/other/6.jpg"
  ];

  // Column 2
  const col2 = [
    "/assets/img/photos/other/1.jpg",
    "/assets/img/photos/other/9.jpg",
  ];

  // Column 3
  const col3 = [
    "/assets/img/photos/other/4.jpg",
  ];

  return (
    <main id="main">
      <div style={{ height: '175px' }}></div>

      <h4 className="breadcrumb">
        <Link to="/creative/photography" style={{ color: '#000' }}>Photography</Link> &gt; Misc
      </h4>

      <div style={{ height: '50px' }}></div>

      <section id="photography" style={{ width: '100%', maxWidth: '1180px', margin: 'auto' }}>
        
        <h2>misc</h2>

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
                  alt={`Misc ${index}`} 
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
                  alt={`Misc ${index}`} 
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
                  alt={`Misc ${index}`} 
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

export default Misc;