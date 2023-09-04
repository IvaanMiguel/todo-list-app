import { useState } from "react"

function Textfield({ name, label = 'Label', type, icon, validation }) {
  // const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    if (!validation) return

    if (e.target.value === '') {
      setError(false)

      return
    }

    setError(validation(e.target.value))
  }

  return (
    <div className='input-group mb-3'>
      <div className='form-floating'>
        <input
          className={ (error ? 'is-invalid' : '') + ' form-control' }
          type={ type }
          placeholder=''
          name={ name }
          onChange={ handleChange }
        />
        <label className='form-label'>{ label }</label>
      </div>
      {
        icon ? (
          <span className='input-group-text'>
            <img src={ icon } alt='Input icon' />
          </span>
        ) : null
      }
    </div>
  )
}

export default Textfield
