import userIcon from '../images/user-icon.png'
import passwordIcon from '../images/password-icon.png'
import emailIcon from '../images/email-icon.png'

import Layout from './Layout';
import Textfield from '../components/Textfield';
import { Link } from 'react-router-dom';

function SignUp() {
  const validateUsername = username => /\d+/.test(username)
  // const validateEmail = email => !/\S+@\S+\.\S+/.test(email)
  const validateEmail = email => !/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email)

  return (
    <Layout bottom={ <Bottom /> }>
      <h1 className='mb-3 text-center'>Sign up</h1>
      <form className='mx-auto'>
        <Textfield name='username' label='Username' icon={ userIcon } validation={ validateUsername }/>
        <Textfield name='email' label='Email' icon={ emailIcon } validation={ validateEmail  }/>
        <Textfield name='password' label='Password' type='password' icon={ passwordIcon }/>
        <div className='row mx-auto flex-column gap-2'>
          <button className='btn btn-primary btn-mw mx-auto'>Sign up</button>
        </div>
      </form>
    </Layout>
  );
}

function Bottom() {
  return (
    <div className='row mt-1'>
      <Link to='/' className='btn btn-link btn-mw mx-auto'>
        Already have an account?
      </Link>
    </div>
  )
}

export default SignUp;
