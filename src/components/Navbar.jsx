import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  // 1. Logic to check if we are on the home page
  const isHome = location.pathname === '/';

  // Helper to check if link is active (for menu highlighting)
  const isActive = (path) => location.pathname === path ? 'menu-active' : '';

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (!mobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  };

  return (
    <>
      <header id="header">
        <div className="container">
          
          {/* 2. DYNAMIC CLASS: Only adds 'home-logo' if isHome is true */}
          <div className={`pull-left logo ${isHome ? 'home-logo' : ''}`}>
            <h1>
              <Link to="/">
                susanna<br/>
                {/* Optional: Add the specific spacing span for non-home pages if you want */}
                {!isHome ? <span style={{ marginRight: '-15px' }}>tang</span> : 'tang'}
              </Link>
            </h1>
          </div>
          
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className={isActive('/')}><Link to="/">Home</Link></li>
              <li className={isActive('/projects')}><Link to="/projects">Projects</Link></li>
              <li className={isActive('/creative')}><Link to="/creative">Creative</Link></li>
              <li className={isActive('/about')}><Link to="/about">About</Link></li>
              {/* <li className="ig">
                <a target="_blank" rel="noopener noreferrer" style={{fontSize:'25px', marginTop:'-8px'}} href="https://www.instagram.com/susannatphotos/" className="instagram">
                  <FaInstagram />
                </a>
              </li> */}
            </ul>
          </nav>

          <button type="button" id="mobile-nav-toggle" onClick={toggleMobileNav}>
            {mobileNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {mobileNavOpen && (
        <div id="mobile-nav">
          <ul>
            <li><Link to="/" onClick={toggleMobileNav}>Home</Link></li>
            <li><Link to="/projects" onClick={toggleMobileNav}>Projects</Link></li>
            <li><Link to="/creative" onClick={toggleMobileNav}>Creative</Link></li>
            {/* <li><Link to="/about" onClick={toggleMobileNav}>About</Link></li> */}
            {/* <li className="ig">
                <a href="https://www.instagram.com/susannatphotos/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </li> */}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;