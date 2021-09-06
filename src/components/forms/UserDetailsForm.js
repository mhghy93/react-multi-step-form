import React, { useState } from 'react';
import { useFormik } from 'formik';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserDetailsForm = ({ formData, setFormData, step, handleNextStep }) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: formData,
    onSubmit: (values) => {
      setFormData(values);
      handleNextStep();
      setActiveStep(step - 1);
    },
  });

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            User Registration
          </Typography>
          <FormSteps activeStep={activeStep} />
          <Typography variant="h6">User Details</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              id="firstName"
              label="FirstName"
              margin="dense"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              fullWidth
            />

            <TextField
              type="text"
              id="lastName"
              label="LastName"
              margin="dense"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              fullWidth
            />

            <TextField
              type="email"
              id="email"
              label="Email"
              margin="dense"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              fullWidth
            />

            <TextField
              type="password"
              id="password"
              label="Password"
              margin="dense"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              fullWidth
            />
            <Button
              className={classes.button}
              type="submit"
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

export default UserDetailsForm;
