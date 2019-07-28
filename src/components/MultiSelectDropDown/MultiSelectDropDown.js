import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

const MultiSelectDropDown = ({ id, label, hidden, options, initialValues, ...rest }) => {
  const values = options.map(e => ({
    value: e.key,
    label: e.value,
    selected: initialValues.some(v => v.key === e.key),
  }));
  return (
    <div className='form-group row'>
      <label htmlFor={id} className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        {label}
      </label>
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <Multiselect
          id={id}
          data={values}
          multiple
          {...rest}
        />
      </div>
    </div>
  )
};

export default MultiSelectDropDown;