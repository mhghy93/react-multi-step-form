import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@material-ui/core/Container';
import { Typography, FormHelperText } from '@material-ui/core';
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

  const validationSchema = yup.object({
    addressLineOne: yup
      .string('Enter your address line one')
      .required('Address Line One is required')
      .max(70, 'Address Line One should not exceed 70 characters'),
    addressLineTwo: yup
      .string('Enter your address line one')
      .required('Address Line Two is required')
      .max(70, 'Address Line Two should not exceed 70 characters'),
    country: yup
      .string('Enter your country')
      .nullable()
      .required('Country is required'),
    state: yup
      .string('Enter your state')
      .nullable()
      .required('State is required'),
    city: yup.string('Enter your city').nullable().required('City is required'),
    pincode: yup
      .string('Enter your pincode')
      .required('Pincode is required')
      .matches(/^[0-9]+$/, 'Pincode must be in digits only')
      .test(
        'len',
        'Pincode must have 6 digits',
        (val) => val && val.length === 6
      ),
  });

  const handleNext = () => {
    handleNextStep();
    setActiveStep(step - 1);
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: direction === 'next' ? validationSchema : undefined,
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
              error={
                formik.touched.addressLineOne &&
                Boolean(formik.errors.addressLineOne)
              }
              helperText={
                formik.touched.addressLineOne && formik.errors.addressLineOne
              }
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
              error={
                formik.touched.addressLineTwo &&
                Boolean(formik.errors.addressLineTwo)
              }
              helperText={
                formik.touched.addressLineTwo && formik.errors.addressLineTwo
              }
              fullWidth
            />

            <FormControl
              className={classes.formControl}
              error={formik.touched.country && Boolean(formik.errors.country)}
            >
              <InputLabel id="country-select-label">Country</InputLabel>
              <Select
                labelId="country-helper-label"
                id="country"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'India'}>India</MenuItem>
              </Select>
              <FormHelperText
                error={formik.touched.country && Boolean(formik.errors.country)}
              >
                {formik.touched.country && formik.errors.country}
              </FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel
                id="state-select-label"
                error={formik.touched.state && Boolean(formik.errors.state)}
              >
                State
              </InputLabel>
              <Select
                labelId="state-helper-label"
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.touched.state && Boolean(formik.errors.state)}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Assam'}>Assam</MenuItem>
                <MenuItem value={'Meghalaya'}>Meghalaya</MenuItem>
              </Select>
              <FormHelperText
                error={formik.touched.state && Boolean(formik.errors.state)}
              >
                {formik.touched.state && formik.errors.state}
              </FormHelperText>
            </FormControl>

            <FormControl
              className={classes.formControl}
              error={formik.touched.city && Boolean(formik.errors.city)}
            >
              <InputLabel id="city-select-label">City</InputLabel>
              <Select
                labelId="city-helper-label"
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Guwahati'}>Guwahati</MenuItem>
                <MenuItem value={'Shillong'}>Shillong</MenuItem>
              </Select>
              <FormHelperText
                error={formik.touched.city && Boolean(formik.errors.city)}
              >
                {formik.touched.city && formik.errors.city}
              </FormHelperText>
            </FormControl>

            <TextField
              type="text"
              id="pincode"
              label="Pincode"
              margin="dense"
              name="pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
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
