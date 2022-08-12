import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center align-content-center flex-direction-column">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <span className="py-3">Portfolio Ghostik-gh</span>
            </Link>

            <ul className="bd-subnavbar nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center">
              <li>
                <a href="/#123" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link px-2 text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#456" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
