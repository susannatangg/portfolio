import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Creative from './pages/Creative';
import Projects from './pages/Projects';
import About from './pages/About';
import Photography from './pages/Photography';
import Portrait from './pages/photography/Portrait';
import Sports from './pages/photography/Sports';
import Misc from './pages/photography/Misc';
import Book from './pages/Book';
import Drawing from './pages/Drawing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />

          {/* Sub-pages */}
          <Route path="/creative/book" element={<Book />} />
          <Route path="/creative/drawing" element={<Drawing />} />
          <Route path="/creative/photography" element={<Photography />} />
          <Route path="/photography/portrait" element={<Portrait />} />
          <Route path="/photography/sports" element={<Sports />} />
          <Route path="/photography/misc" element={<Misc />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;