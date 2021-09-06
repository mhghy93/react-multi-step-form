import React from 'react';
import { useFormik } from 'formik';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { formStyles } from './form.styles';

import AppCard from '../cards/AppCard';
import FormSteps from './FormSteps';

const UserAddressForm = ({
  formData,
  setFormData,
  step,
  handleNextStep,
  handlePreviousStep,
}) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = React.useState(1);
  const [direction, setDirection] = React.useState('previous');

  const handleNext = () => {
    handleNextStep();
    setActiveStep(step - 1);
  };

  const formik = useFormik({
    initialValues: formData,
    onSubmit: (values) => {
      setFormData(values);
      direction === 'previous' ? handlePreviousStep() : handleNext();
    },
  });

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            User Address
          </Typography>
          <FormSteps activeStep={activeStep} />
          <Typography variant="h6">User Address</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              id="addressLineOne"
              label="Address Line One"
              margin="dense"
              name="addressLineOne"
              onChange={formik.handleChange}
              value={formik.values.addressLineOne}
              fullWidth
            />

            <TextField
              type="text"
              id="addressLineTwo"
              label="Address Line Two"
              margin="dense"
              name="addressLineTwo"
              onChange={formik.handleChange}
              value={formik.values.addressLineTwo}
              fullWidth
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'India'}>India</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Assam'}>Assam</MenuItem>
                <MenuItem value={'Meghalaya'}>Meghalaya</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Guwahati'}>Guwahati</MenuItem>
                <MenuItem value={'Shillong'}>Shillong</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="text"
              id="pincode"
              label="Pincode"
              margin="dense"
              name="pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
              fullWidth
            />

            <div className={classes.formGroup}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => setDirection('previous')}
              >
                Previous
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => setDirection('next')}
              >
                Next
              </Button>
            </div>
          </form>
        </AppCard>
      </div>
    </Container>
  );
};

export default UserAddressForm;
