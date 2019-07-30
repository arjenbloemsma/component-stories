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
  const values = grouped
    ? options.map(o => ({
      ...o,
      children: o.children.map(c => ({
        key: c.key,
        value: !!rest.showkey ? `${c.key} - ${c.value}` : c.value,
        selected: !!initialValues && initialValues.some(i => i && i === c.key)
      }))
    }))
    : options.map(e => ({
      value: o.key,
      label: !!rest.showkey ? `${o.key} - ${o.value}` : o.value,
      selected: !!initialValues && initialValues.some(i => i && i === o.key)
    }));
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