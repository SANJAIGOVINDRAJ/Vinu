import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectField = ({ name, options, placeholder }) => {
  return (
    <div className=' font-medium'>
      <Field
        as="select"
        name={name}
        className=" w-full border-2 border-slate-400 p-3 focus:border-2 text-slate-500 focus:border-violet-600 focus:ring-0 rounded-md font-medium "
      >
        <option className=' ' value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} className='  '  value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectField;