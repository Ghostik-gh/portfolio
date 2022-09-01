import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { action_login_user } from '../store/ActionCreatorUser';
import './Login.scss';
function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/portfolio';

  const logIn = (name) => {
    dispatch(action_login_user(name));
    // { type: 'LOGIN_USER', payload: name }
    navigate(fromPage, { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username?.value || null;
    if (user !== null) {
      logIn(user);
    } else {
      alert('please input name');
    }
  };

  return (
    <div className="container">
      <div className="login-text">
        {user.name !== 'Unknown' ? <div>Hello: {user.name}!</div> : null}
        {fromPage === '/about' || '/portfolio' ? (
          <div className="">Enter your name to view information about me</div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder="input name" name="username" />
          </label>
          <button className="btn btn-dark">Autorization</button>
        </form>
      </div>
    </div>
  );
}

export { Login };
