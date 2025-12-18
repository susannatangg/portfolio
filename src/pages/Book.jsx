import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DesignItem = () => {
  // This changes the background color ONLY for this page
  useEffect(() => {
    // Save original background
    const originalBackground = document.body.style.backgroundColor;
    // Set new background
    document.body.style.backgroundColor = '#f6f5e1';

    // Cleanup: Reset background when leaving this page
    return () => {
      document.body.style.backgroundColor = originalBackground;
    };
  }, []);

  return (
    <>
      <div style={{ height: '175px' }}></div>

      <div className="design-hero">
        <div id="main">
          {/* <h4 className="breadcrumb">
            <Link to="/design" style={{ color: '#005246' }}>PERSONAL</Link> &gt; ILLUSTRATION
          </h4> */}
          <h2>I AM ME & YOU ARE YOU</h2>
          <h3>All About Our DNA</h3>
          <img src="/assets/bb/mockup.jpg" className="mockup" alt="Book Mockup" />
        </div>
      </div>

      <main id="main">
        <div style={{ height: '80px' }}></div>

        <section id="design-sub">
          {/* Text Columns */}
          <div className="p1">
            <div className="item flex-fill">
              <h3>our story</h3>
              <p>
                Michelle, Lalia, and I met at a biotechnology summer program in 2022. There, we spent our latest nights at the lab together, falling asleep in lectures together, chugging caffeine together, and miraculously still falling in love with biology together!
                When the program ended, we stayed in touch through our common love for biology and care for children.
                <br/>
                <br/>
                After many many Zoom meetings turned yaps, we drafted a book, published our book, hosted read-alouds in elementary schools, and found a new joy in sharing the project that bonded our friendship!
                We hope that our book can provide a memorable and simple scientific answer to the question: What makes you, you? 
             </p>
            </div>
            <div className="item flex-fill">
              <h3>tech stack</h3>
              <h5>1. ADOBE INDESIGN</h5>
              <p style={{ marginBottom: '18px' }}>
                Used to create pages and compile illustration components and typography with consistent style and spacing. 
              </p>
              <h5>2. ADOBE ILLUSTRATOR</h5>
              <p style={{ marginBottom: '18px' }}>
                Most illustrations were created or cleaned and post-processed in Adobe Illustrator for scalable vectorized images. 
              </p>
              <h5>3. PROCREATE</h5>
              <p>
                Some complex illustrations were drawn by hand on Procreate and then post-processed and vectorized in Adobe Illustrator.
              </p>
            </div>
            {/* <div className="item flex-fill">
              <h3>mission</h3>
              <p>
                Michelle, Lalia, and I hope that our book can provide a memorable and simple scientific answer to the question: What makes you, you? 
              </p>
            </div> */}
          </div>

          <div style={{ height: '80px' }}></div>

          {/* Three Horizontal Images */}
          <h3>ILLUSTRATION SAMPLES</h3>
          <div className="p1-imgs">
            <img src="/assets/bb/illustration1.png" className="p1-img" alt="Process 1" />
            <img src="/assets/bb/illustration2.png" className="p1-img" alt="Process 2" />
            <img src="/assets/bb/illustration3.png" className="p1-img" alt="Process 3" />
          </div>

          <div style={{ height: '80px' }}></div>

          {/* Colors and Typography */}
          <section id="bottom">
            <div className="flex">
              <div className="flex-item color">
                <h3>COLOR PALETTE</h3>
                <div className="container">
                  <div className="item div1" style={{ aspectRatio: '1/1', backgroundColor: '#007b6a' }}></div>
                  <div className="item div2" style={{ aspectRatio: '1/1', backgroundColor: '#f6c6d5' }}></div>
                  <div className="item div3" style={{ aspectRatio: '1/1', backgroundColor: '#fc6100' }}></div>
                  <div className="item div4" style={{ aspectRatio: '1/1', backgroundColor: '#ffaf00' }}></div>
                  <div className="item div5" style={{ aspectRatio: '1/1', backgroundColor: '#b9cf27' }}></div>
                  <div className="item div6" style={{ aspectRatio: '1/1', backgroundColor: '#f6d000' }}></div>
                  <div className="item div7" style={{ aspectRatio: '1/1', backgroundColor: '#0094b7' }}></div>
                  <div className="item div8" style={{ aspectRatio: '1/1', backgroundColor: '#ff445b' }}></div>
                  <div className="item div9" style={{ aspectRatio: '1/1', backgroundColor: '#4c47a0' }}></div>
                </div>
              </div>
              <div className="flex-item type">
                <h3>TYPOGRAPHY</h3>
                <div className="container">
                  <div className="item">
                    <p style={{ fontFamily: "'helvetica-neue-black', sans-serif" }}>Helvetica Neue Black</p>
                  </div>
                  <div className="item" style={{ marginBottom: '-50px' }}>
                    <p style={{ fontFamily: "'rockwell', sans-serif" }}>Rockwell Bold</p>
                  </div>
                  <div className="item" style={{ marginBottom: '-50px' }}>
                    <p style={{ fontFamily: "'linotte', sans-serif", fontSize: '30px' }}>Linotte Bold</p>
                  </div>
                  <div className="item">
                    <p style={{ fontFamily: "'helvetica-neue-light', sans-serif", fontSize: '20px' }}>helvetica neue ultra light</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div style={{ height: '80px' }}></div>

        {/* Authors Section */}
        <section id="sketch" style={{ position: 'relative' }}>
          <div className="item authors_illus">
            <img src="/assets/bb/authors_illus.png" alt="Authors Illustration" />
          </div>
        </section>

        <div style={{ height: '100px' }}></div>
      </main>
    </>
  );
};

export default DesignItem;