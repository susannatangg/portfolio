import { Link } from 'react-router-dom';

const Photography = () => {
  return (
    <main id="main">
      <div style={{ height: '200px' }}></div>

      {/* Row 1: Portraits */}
      <div className="photography-container">
        <Link to="/photography/portrait" className="photography-item">
          <div className="portrait1 main photography-item" style={{ width: '100%', height: '100%' }}>
            <h2>portrait</h2>
          </div>
        </Link>
        {/* Decorative Boxes */}
        <div className="photography-item portrait2 not-main"></div>
        <div className="photography-item portrait3 not-main"></div>
      </div>

      {/* Row 2: Sports */}
      <div className="photography-container">
        {/* Decorative Boxes */}
        <div className="photography-item sports1 not-main"></div>
        <div className="photography-item sports2 not-main"></div>
        
        <Link to="/photography/sports" className="photography-item">
          <div className="sports3 main photography-item" style={{ width: '100%', height: '100%' }}>
            <h2>sports</h2>
          </div>
        </Link>
      </div>

      {/* Row 3: Misc */}
      <div className="photography-container" style={{ marginBottom: '0px' }}>
        <Link to="/photography/misc" className="photography-item">
          <div className="landscape1 main photography-item" style={{ width: '100%', height: '100%' }}>
            <h2>misc</h2>
          </div>
        </Link>
        {/* Decorative Boxes */}
        <div className="photography-item landscape2 not-main"></div>
        <div className="photography-item landscape3 not-main"></div>
      </div>

      <div style={{ height: '100px' }}></div>
    </main>
  );
};

export default Photography;