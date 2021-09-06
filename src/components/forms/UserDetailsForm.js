import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserDetailsForm = ({ step, handleNextStep }) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    handleNextStep();
    setActiveStep(step - 1);
  };

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            User Registration
          </Typography>
          <FormSteps activeStep={activeStep} />
          <Typography variant="h6">User Details</Typography>
          <form>
            <TextField
              type="text"
              id="firstName"
              label="FirstName"
              margin="dense"
              fullWidth
            />

            <TextField
              type="text"
              id="lastName"
              label="LastName"
              margin="dense"
              fullWidth
            />

            <TextField
              type="email"
              id="email"
              label="Email"
              margin="dense"
              fullWidth
            />

            <TextField
              type="password"
              id="password"
              label="Password"
              margin="dense"
              fullWidth
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              Next
            </Button>
          </form>
        </AppCard>
      </div>
    </Container>
  );
};

export default UserDetailsForm;
