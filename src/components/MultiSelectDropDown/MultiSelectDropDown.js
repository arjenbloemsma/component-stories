import React from 'react';
import cn from 'classnames';
import Multiselect from 'react-bootstrap-multiselect';

// const handleChange = ({ 0: { value } }, checked) => {
//   console.log(value);
//   console.log(checked);
//   // const { options, fields } = this.props;
//   // const { push, remove, getAll } = fields;

//   // if (checked) {
//   //   const obj = options.find(val => val.divisionId.toString() === value);
//   //   return push(obj);
//   // }

//   // const fieldsValues = getAll();
//   // const idx = fieldsValues.findIndex(val => val.divisionId.toString() === value);

//   // return remove(idx);
// }

const MultiSelectDropDown = ({ id, label, hidden, options, initialValues, grouped, ...rest }) => {
  console.log(options);
  const values = grouped
    ? options.map(e => ({
      ...e,
      children: e.children.map(c => ({
        key: c.key,
        value: !!rest.showkey ? `${c.key} - ${c.value}` : c.value,
        selected: !!initialValues && initialValues.some(v => v && v === c.key)
      }))
    }))
    : options.map(e => ({
      value: e.key,
      label: !!rest.showkey ? `${e.key} - ${e.value}` : e.value,
      selected: !!initialValues && initialValues.some(v => v && v === e.key)
    }));
  console.log(values);
  return (
    <div className={cn('form-group row', { hidden })}>
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