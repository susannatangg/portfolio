const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Susanna Tang
        </div>
      </div>
    </footer>
  );
};

export default Footer;