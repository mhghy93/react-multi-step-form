import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserConfirm = ({ step, handleResetStep }) => {
  const classes = formStyles();

  const handleConfirm = () => {
    handleResetStep();
  };

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            Success
          </Typography>

          <FormSteps activeStep={step - 1} />

          <div className={classes.successMessage}>
            <CheckCircleIcon style={{ color: green[500] }} />
            <Typography variant="body1">Successfully registered.</Typography>
          </div>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleConfirm}
          >
            Return
          </Button>
        </AppCard>
      </div>
    </Container>
  );
};

export default UserConfirm;
