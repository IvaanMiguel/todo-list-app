function Textfield({ name, label = 'Label', type, icon }) {
  return (
    <div className='input-group mb-3'>
      <div className='form-floating'>
        <input className='form-control' type= { type } placeholder='' name={ name } />
        <label className='form-label'>{ label }</label>
      </div>
      {
        icon ? (
          <span className='input-group-text'>
            <img src={ icon } alt='Input icon'></img>
          </span>
        ) : null
      }
    </div>
  )
}

export default Textfield
