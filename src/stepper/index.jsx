import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Address} from '../components/address'
import {Payment} from '../components/payment'
import {Review} from '../components/review'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(10),
    marginInlineStart: theme.spacing(20),
  
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Details', 'Account','Overall'];
}

function getStepContent(stepIndex,setStep,formValues, setFormValues) {
  switch (stepIndex) {
    case 0:
      return <Address submit={setStep} previousValues={formValues} setFormValues={setFormValues} />;
    case 1:
      return <Payment submit={setStep} previousValues={formValues} setFormValues={setFormValues} />;
    case 2:
      return <Review submit={setStep} values={formValues} />;
    default:
      return 'Error';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = useState({});
  const steps = getSteps();

  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

          {
            getStepContent(activeStep,setActiveStep,formValues,setFormValues)
          }
          <h1 className="header"> Developed By Muhammad Asghar </h1>

    </div>
  );
}