import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Review = ({values,submit}) => {
  
  return (
    <div className="data"> 

 
    <p className="para">Name: {values.name} </p>
       <p className="para">City: {values.city} </p>
       <p className="para">Email: {values.email} </p>
       <p className="para">CardNumber: {values.cardNumber} </p>
       <p className="para">Payment: {values.payment} </p>
       <button className="btn" onClick={()=>submit(1)} >Back</button>
       <button className="btn" type="submit">Submit</button>
      

  </div>
  );
};