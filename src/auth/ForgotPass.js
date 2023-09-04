import emailIcon from '../images/email-icon.png'

import Layout from './Layout';
import Textfield from '../components/Textfield';
import { Link } from 'react-router-dom';

function ForgotPass() {
    return (
      <Layout bottom={ <Bottom /> }>
        <h1 className='mb-3 text-center'>Recover your password</h1>
        <form className='mx-auto'>
          <Textfield name='email' label='Email' icon={ emailIcon }/>
          <div className='row mx-auto flex-column gap-2'>
            <button className='btn btn-primary btn-mw mx-auto'>Send email</button>
          </div>
        </form>
      </Layout>
    );
  }
  
  function Bottom() {
    return (
      <div className='row mt-1'>
        <Link to='/' className='btn btn-link btn-mw mx-auto'>
          Return to login
        </Link>
      </div>
    )
  }

  export default ForgotPass;
