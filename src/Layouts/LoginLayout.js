import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../Components/InputField';
import SelectField from '../Components/SelectField';
import * as Yup from 'yup';
import ButtonField from "../Components/ButtonField"


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
  role: Yup.string().required('Role is required'),
});

const fields = [
  { name: 'email', type: 'input', placeholder: 'Email', inputType: 'email' },
  { name: 'password', type: 'input', placeholder: 'Password', inputType: 'password' },
  {
    name: 'role',
    type: 'select',
    placeholder: 'Select Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
    ],
  },
];

const LoginLayout = () => {
  const initialValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = '';
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className='w-[500px] shadow-2xl flex  flex-col gap-y-5 bg-white p-20 rounded-2xl'>
            <p className=' mb-10 font-bold text-6xl font-unbonded'>Fuel<span className=' text-violet-700'>On.</span></p>
          {fields.map((field) => (
            <div key={field.name}>
              {field.type === 'input' ? (
                <InputField
                  name={field.name}
                  type={field.inputType}
                  placeholder={field.placeholder}
                />
              ) : (
                <SelectField
                  name={field.name}
                  options={field.options}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
          <ButtonField name={"Continue"} styles={ " bg-black text-white"} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginLayout;