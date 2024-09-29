import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const InputField = ({ name, placeholder, type, validation }) => {
  return (
    <div>
      <div className=' relative'>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className=" peer w-full focus:border-violet-600 border-2 focus:border-2 border-slate-400 focus:ring-0 font-medium p-2 pt-5 rounded-md placeholder:text-white relative bg-white"
      />
      <label className=' absolute left-2 peer-placeholder-shown:top-4 peer-focus:text-violet-600 peer-placeholder-shown:text-base text-slate-500 placeholder-shown:font-medium  top-2  text-xs font-semibold'>{name}</label>
      </div>
    </div>
  );
};

export default InputField;