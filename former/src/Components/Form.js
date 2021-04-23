import React from 'react'

function Form (props) {
    const { values, submit, change, error } = props

    const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

return(
    <form onSubmit={onSubmit}>
    <p>{error.username}</p>
    <p>{error.ToS}</p>
    <div className='container' >
        <label>
          {/* Username */}
          <input
            name='username'
            type='text'
            value={values.username}
            onChange={onChange}
            placeholder='Username'
          />
        </label>
        <br/>
        <label>
          {/* Password */}
          <input
            name='password'
            type='password'
            value={values.password}
            onChange={onChange}
            placeholder='Password'
          />
        </label>
        <br/>
        <label>
          {/* Email Address */}
          <input
            name='email'
            type='text'
            value={values.email}
            onChange={onChange}
            placeholder='Email address'
          />
        </label>
        <br/>
        <label>
          Terms of Service
          <input
            name='ToS'
            type='checkbox'
            checked={values.accept}
            onChange={onChange}
          />
        </label>
        <div className='submit'>
        <button>Submit</button>
        </div>
        </div>
    </form>
    )
}

export default Form;