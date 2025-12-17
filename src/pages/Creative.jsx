import { Link } from 'react-router-dom';

const Creative = () => {

  return (
    <main id="main">
      {/* <div style={{ height: '200px' }}></div> */}

      <div id="creative-page">
        <Link to="/creative/photography">photography</Link>
        <Link to="/creative/drawing">drawing</Link>
        <Link to="/creative/book">my book!</Link>
      </div>

      {/* <div style={{ height: '100px' }}></div> */}
    </main>
  );
};

export default Creative;