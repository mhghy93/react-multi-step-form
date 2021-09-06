import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserConfirm = ({
  step,
  handleNextStep,
  handlePreviousStep,
  handleResetStep,
}) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = React.useState(2);

  const handleNext = () => {
    handleNextStep();
    setActiveStep(step - 1);
    handleResetStep();
  };

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            Confirm
          </Typography>
          <FormSteps activeStep={activeStep} />
          <Typography variant="h6">Review</Typography>
          <form>
            <div className={classes.formGroup}>
              <Typography variant="body1">FirstName</Typography>
              <Typography variant="body2">Name</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">LastName</Typography>
              <Typography variant="body2">Name</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Email</Typography>
              <Typography variant="body2">email@gmail.com</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Address Line 1</Typography>
              <Typography variant="body2">address</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Address Line 2</Typography>
              <Typography variant="body2">address</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Country</Typography>
              <Typography variant="body2">India</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">State</Typography>
              <Typography variant="body2">Assam</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">City</Typography>
              <Typography variant="body2">Guwahati</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Pincode</Typography>
              <Typography variant="body2">781038</Typography>
            </div>

            <div className={classes.formGroup}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handlePreviousStep}
              >
                Previous
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                Confirm
              </Button>
            </div>
          </form>
        </AppCard>
      </div>
    </Container>
  );
};

export default UserConfirm;
