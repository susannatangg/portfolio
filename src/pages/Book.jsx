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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in. Faucibus turpis in eu mi bibendum neque egestas congue. Est pellentesque elit ullamcorper dignissim cras tincidunt. Commodo odio aenean sed adipiscing diam donec. Facilisis gravida neque convallis a cras semper auctor neque vitae.
              </p>
            </div>
            <div className="item flex-fill">
              <h3>process</h3>
              <h5>1. SKETCHING</h5>
              <p style={{ marginBottom: '18px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <h5>2. DESIGN</h5>
              <p style={{ marginBottom: '18px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <h5>3. FINAL</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div className="item flex-fill">
              <h3>mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in.
              </p>
            </div>
          </div>

          <div style={{ height: '80px' }}></div>

          {/* Three Horizontal Images */}
          <div className="p1-imgs">
            <img src="/img/design/horizontal.jpg" className="p1-img" alt="Process 1" />
            <img src="/img/design/horizontal.jpg" className="p1-img" alt="Process 2" />
            <img src="/img/design/horizontal.jpg" className="p1-img" alt="Process 3" />
          </div>

          <div style={{ height: '80px' }}></div>

          {/* Process Grid */}
          <section id="process">
            <h3>DESIGN PROCESS</h3>
            <div className="container">
              <div className="item div1" style={{ aspectRatio: '1' }}>
                <img src="/img/photography/square.jpg" alt="Process Step 1" />
                <p>Lit velenima que odit ad maio totatii.</p>
              </div>
              <div className="item div2" style={{ aspectRatio: '1' }}>
                <img src="/img/photography/square.jpg" alt="Process Step 2" />
                <p>Lit velenima que odit ad maio totatii.</p>
              </div>
              <div className="item div3" style={{ aspectRatio: '1' }}>
                <img src="/img/photography/square.jpg" alt="Process Step 3" />
                <p>Lit velenima que odit ad maio totatii.</p>
              </div>
              <div className="item div4">
                 {/* <img src="/img/design/horizontal.jpg" alt="Process Step 4" /> */}
              </div>
            </div>
          </section>

          {/* <div style={{ height: '80px' }}></div> */}

          {/* Final Illustration Grid */}
          {/* <section id="final">
            <h3>ILLUSTRATION SAMPLES</h3>
            <div className="container">
              <div className="item div1"></div>
              <div className="item div2" style={{ aspectRatio: '1 / 1' }}></div>
              <div className="item div3" style={{ aspectRatio: '1 / 1' }}></div>
              <div className="item div4"></div>
            </div>
          </section> */}

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