import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AppCard from './AppCard';
import FormSteps from './FormSteps';

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '1rem',
  },
});

const MultiStepForm = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            User Registration
          </Typography>
          <FormSteps />
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
            >
              Next
            </Button>
          </form>
        </AppCard>
      </div>
    </Container>
  );
};

export default MultiStepForm;
