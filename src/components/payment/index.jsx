import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

export const Payment = ({submit, setFormValues,previousValues}) => {
  return (
    <Formik
      initialValues={previousValues}
      validationSchema={Yup.object({
        payment: Yup.string()
        .min(8, 'Minimum 8 characters')
          .max(15, 'Maximum 15 characters ')
          .required('Required Necessary'),
        cardNumber: Yup.string()
          .min(8, 'Minimum 8 characters')
          .max(15, 'Maximum 15 characters')
          .required('Required Necessary '),
        
      })}
      onSubmit={(values) => {
        submit(2)
        setFormValues({...values,...previousValues})
      }}
    >
      <Form className="forms">
      <Field id="ds" name="payment" as={TextField}  placeholder="Payment" type="text" />
        <br/>
        <ErrorMessage name="Card Name" />
        <br/>
        <Field id="ds" name="cardNumber" as={TextField} placeholder="Card Number" type="text" />
        <br/>
        <ErrorMessage name="Card Number" />
        <br/>


        <button className="btn" onClick={()=>submit(0)} >Back</button>
        
        <button className="btn" type="submit">Done</button>
      </Form>
    </Formik>
  );
};