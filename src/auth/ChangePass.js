import Layout from './Layout';
import Textfield from '../components/Textfield';

import newPasswordIcon from '../images/new-password-icon.png'
import repeatPasswordIcon from '../images/repeat-password-icon.png'

function ChangePass() {
    return (
      <Layout>
        <h1 className='mb-3 text-center'>Change your password</h1>
        <form className='mx-auto'>
          <Textfield name='newPassword' label='New password' type='password' icon={ newPasswordIcon }/>
          <Textfield name='repeatPassword' label='Repeat password' type='password' icon={ repeatPasswordIcon }/>
          <div className='row mx-auto flex-column gap-2'>
            <button className='btn btn-primary btn-mw mx-auto'>Change password</button>
          </div>
        </form>
      </Layout>
    );
  }
  
  export default ChangePass;