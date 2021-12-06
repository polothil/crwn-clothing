import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherFormProps }) => {
  return (
    <div className='group'>
      <input type='text' className='form-input' onChange={handleChange} {...otherFormProps} />
      {label && <label className={`${otherFormProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
