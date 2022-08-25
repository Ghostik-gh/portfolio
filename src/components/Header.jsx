import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { action_logout_user } from '../store/ActionCreatorUser';

function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(action_logout_user());
    navigate('/portfolio', { replace: true });
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-nav">
            <Link
              to="/portfolio"
              className="d-flex text-white text-decoration-none"
            >
              <span id="top" className="py-3">
                Portfolio Ghostik-gh
              </span>
            </Link>

            <ul className="nav col-12 mb-2">
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
              <li className="last-li">
                {user.isLogin ? (
                  <>
                    <span className="username">{user.name}</span>
                    <button onClick={() => logOut()}>Exit</button>
                  </>
                ) : (
                  <Link to="/login" className="nav-link px-2 text-white">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
