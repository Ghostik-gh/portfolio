import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({ type: 'LOG_OUT' });
    navigate('/portfolio', { replace: true });
  };
  return (
    <>
      <header className="text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center align-content-center flex-direction-column">
            <Link
              to="/portfolio"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <span id="top" className="py-3">
                Portfolio Ghostik-gh
              </span>
            </Link>

            <ul className="bd-subnavbar nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center">
              <li>
                <Link to="/portfolio" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link px-2 text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
              {user.isLogin ? (
                <li>
                  <span>{user.name}</span>
                  <button onClick={() => logOut()}>Exit</button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="nav-link px-2 text-white">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
