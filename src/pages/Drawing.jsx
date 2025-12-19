import { Link } from 'react-router-dom';

const Drawing = () => {
  // Updated the 'src' paths within the array to include the dynamic base URL
  const drawings = [
    { id: 1, text: "wuzhen, china.", src: `${import.meta.env.BASE_URL}assets/img/drawing/wuzhen.jpg`},
    { id: 2, text: "salmon on a stick :O", src: `${import.meta.env.BASE_URL}assets/img/drawing/salmon.jpg`},
    { id: 3, text: "my first omakase!", src: `${import.meta.env.BASE_URL}assets/img/drawing/omakase.jpg`},
    { id: 4, text: "jiufen, taiwan.", src: `${import.meta.env.BASE_URL}assets/img/drawing/jiufen.jpg`},
    { id: 5, text: "another beautiful day to work a 9-5 in seattle!", src: `${import.meta.env.BASE_URL}assets/img/drawing/seattle.jpg`},
  ];

  return (
    <main id="main">
      <div style={{ height: '225px' }}></div>

      <section id="photography" style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
        
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>my sketchbook!</h2>
        
        {/* The Centered Column */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '60px' // Space between each drawing block
        }}>
          
          {drawings.map((item) => (
            <div key={item.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Gray Image Block */}
              <div className="drawing-image-box">
                 {/* No changes needed here, since the src is already fixed in the array above */}
                 {item.src && <img src={item.src} alt={item.text} className="drawing-img" />}
              </div>

              {/* Text Box */}
              <div style={{ 
                maxWidth: '500px', 
                width: '100%', 
                textAlign: 'left'
              }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <div style={{ height: '80px' }}></div>
    </main>
  );
};

export default Drawing;