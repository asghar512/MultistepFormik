import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';



export const Address = ({submit, setFormValues,previousValues}) => {
  return (
    <Formik
      initialValues={previousValues}
      validationSchema={Yup.object({
        name: Yup.string()
        .min(8, 'Must be greater than 8')
          .max(10, 'Must be less than 10 ')
          .required('Required Necessary'),
        city: Yup.string()
        .min(8, 'Must be greater than 8')
          .max(15, 'Must be 15 characters')
          .required('Required Necessary '),
        email: Yup.string().email('Donot Support These Kind OF Email ').required('Required Necessary'),
      })}
      onSubmit={(values) => {
        submit(1)
        setFormValues({...values})
      }}
    >
      <Form className="forms">
        <Field id="ds" name="name" as={TextField} placeholder="Name" type="text" />
        <br/>
        <ErrorMessage name="name" />
        <br/>
        <Field id="ds" name="city" as={TextField} placeholder="City" type="text" />
        <br/>
        <ErrorMessage name="city" />
        <br/>
        
        <Field id="ds" name="email" as={TextField}  placeholder="Email" type="email" />
        <br/>
        <ErrorMessage name="email" />
        <br/>
        <button className="btn" type="submit">Done </button>
      </Form>
    </Formik>
  );
};