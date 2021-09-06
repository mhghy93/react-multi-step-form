import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles({
  stepper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0 1rem 0',
    margin: '0 0 1rem 0',
    fontSize: '10rem',
  },
});

function getSteps() {
  return ['User Details', 'User Address', 'Confirm'];
}

const FormSteps = ({ activeStep }) => {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <Stepper className={classes.stepper} activeStep={activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FormSteps;
