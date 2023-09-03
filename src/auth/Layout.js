import logo from '../images/todo-logo.png'

function Layout({ children, bottom }) {
  return (
    <div className='container-xl py-2 px-3 d-flex justify-content-center flex-column'>
      <img className='logo mx-auto mb-3' src={ logo } alt='TODO logo'></img>
      <div className='form-container border rounded p-3 mx-auto'>
        { children }
      </div>
      { bottom }
    </div>
  )
}

export default Layout
