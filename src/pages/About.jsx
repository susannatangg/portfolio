const About = () => {
  return (
    <main id="main" class="about">
      <div style={{ height: '200px' }}></div>

      <h3>ABOUT</h3>
      <div className="about-outer-container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="about-container">
          <div className="about-item" id="about-img">
            {/* React serves files from 'public' at the root path, so 'assets/...' works */}
            <img src="assets/about2.jpg" alt="Susanna Tang" />
          </div>
          <div className="about-item" id="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in. Faucibus turpis in eu mi bibendum neque egestas congue. Est pellentesque elit ullamcorper dignissim cras tincidunt. Commodo odio aenean sed adipiscing diam donec. Facilisis gravida neque convallis a cras semper auctor neque vitae.
              <br />
              <br />
              Pulvinar elementum integer enim neque volutpat. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Porta lorem mollis aliquam ut porttitor leo a. Proin libero nunc consequat interdum varius.
            </p>
          </div>
        </div>
      </div>

      <h3>CONTACT</h3>
      <div className="contact-container">
        {/* Email */}
        <div className="contact-item" id="design">
          <h4 className="contact-item-title">Email</h4>
          <p className="contact-item-p">
            <a href="mailto:susannatangg@gmail.com">susannatangg@gmail.com</a>
          </p>
        </div>

        {/* Phone */}
        <div className="contact-item" id="photography">
          <h4 className="contact-item-title">Phone</h4>
          <p className="contact-item-p">(669) 287 - 8768</p>
        </div>

        {/* LinkedIn */}
        <div className="contact-item" id="photography">
          <h4 className="contact-item-title">Resume</h4>
          <p className="contact-item-p">
            <a 
              href="https://www.linkedin.com/in/susanna-tang-5662a8235/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div style={{ height: '100px' }}></div>
    </main>
  );
};

export default About;