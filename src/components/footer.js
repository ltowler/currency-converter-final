

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Currency Creations Inc</h4>
            <ul className="list-unstyled">
              <li>810-460-4600</li>
              <li>Kalkaska, Michigan</li>
              <li><a href="mailto:web-admin@gmail.com">web-admin@gmail.com</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Experience</h4>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/luke-towler-19a898287/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col">
            &copy; {new Date().getFullYear()} Currency Creations Inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;