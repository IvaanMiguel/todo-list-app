import logo from '../images/todo-logo.png'
import userIcon from '../images/user-icon.png'
import passwordIcon from '../images/password-icon.png'

function Login() {
  return (
    <div className='container-xl py-2 px-5 d-flex justify-content-center flex-column'>
      <img className='logo mx-auto' src={ logo } alt='TODO logo'></img>
      <h1 className='my-3 text-center'>Login</h1>
      <form className='form mx-auto'>
        <div className='input-group mb-3'>
          <div className='col-md form-floating'>
            <input className='form-control' placeholder='' />
            <label className='form-label'>Username</label>
          </div>
          <span className='input-group-text'>
            <img src={ userIcon } alt='User icon'></img>
          </span>
        </div>
        <div className='input-group mb-3'>
          <div className='col-md form-floating'>
            <input className='form-control' placeholder='' />
            <label className='form-label'>Password</label>
          </div>
          <span className='input-group-text'>
            <img src={ passwordIcon } alt='Password icon'></img>
          </span>
        </div>
        <div className='row mx-auto flex-column gap-3'>
          <button className='btn btn-primary btn-mw mx-auto'>Login</button>
          <button className='btn btn-link btn-mw mx-auto'>Forgot password?</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
