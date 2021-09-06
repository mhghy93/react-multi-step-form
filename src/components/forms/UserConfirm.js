import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserConfirm = ({
  formData,
  step,
  handleNextStep,
  handlePreviousStep,
  clearFormData,
}) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = React.useState(2);

  const {
    firstName,
    lastName,
    email,
    addressLineOne,
    addressLineTwo,
    country,
    state,
    city,
    pincode,
  } = formData;

  const handleConfirm = () => {
    handleNextStep();
    setActiveStep(step - 1);
    clearFormData();
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
              <Typography variant="body2">{firstName}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">LastName</Typography>
              <Typography variant="body2">{lastName}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Email</Typography>
              <Typography variant="body2">{email}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Address Line 1</Typography>
              <Typography variant="body2">{addressLineOne}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Address Line 2</Typography>
              <Typography variant="body2">{addressLineTwo}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Country</Typography>
              <Typography variant="body2">{country}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">State</Typography>
              <Typography variant="body2">{state}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">City</Typography>
              <Typography variant="body2">{city}</Typography>
            </div>

            <div className={classes.formGroup}>
              <Typography variant="body1">Pincode</Typography>
              <Typography variant="body2">{pincode}</Typography>
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
                onClick={handleConfirm}
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
