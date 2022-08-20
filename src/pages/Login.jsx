import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/portfolio';

  const logIn = (name) => {
    dispatch({ type: 'LOGIN_USER', payload: name });
    navigate(fromPage, { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username?.value || 'ok, stay unknown';
    logIn(user);
  };

  return (
    <div className="container">
      <div>Login: {user.name}!</div>
      {fromPage === '/about' ? <>Enter your name to see AboutPage</> : null}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="input name" name="username" />
        </label>
        <button className="btn btn-dark">Autorization</button>
      </form>
    </div>
  );
}

export { Login };
