import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <span>Portfolio Ghostik-gh</span>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/#1" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
