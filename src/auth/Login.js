import userIcon from '../images/user-icon.png'
import passwordIcon from '../images/password-icon.png'

import Textfield from '../components/Textfield.js';
import Layout from './Layout.js';
import { Link } from 'react-router-dom';

function Login() {
  const validateUsername = username => /\d+/.test(username)

  return (
    <Layout bottom={ <Bottom /> }>
      <h1 className='mb-3 text-center'>Login</h1>
      <form className='mx-auto'>
        <Textfield name='username' label='Username' icon={ userIcon } validation={ validateUsername } />
        <Textfield name='password' label='Password' type='password' icon={ passwordIcon }/>
        <div className='row mx-auto flex-column gap-1'>
          <button className='btn btn-primary btn-mw mx-auto'>Login</button>
          <Link to='forgot-password' className='btn btn-link btn-sm btn-mw mx-auto'>
            Forgot password?
          </Link>
        </div>
      </form>
    </Layout>
  );
}

function Bottom() {
  return (
    <div className='row mt-1'>
      <Link to='/sign-up' className='btn btn-link btn-mw mx-auto'>
        Don't you have an account?
      </Link>
    </div>
  )
}

export default Login;
