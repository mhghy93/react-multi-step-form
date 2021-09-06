import React from 'react';
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

const UserAddressForm = ({ step, handleNextStep, handlePreviousStep }) => {
  const classes = formStyles();

  const [activeStep, setActiveStep] = React.useState(1);
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleNext = () => {
    handleNextStep();
    setActiveStep(step - 1);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container>
      <div className={classes.form}>
        <AppCard>
          <Typography align="center" variant="h6" gutterBottom>
            User Address
          </Typography>
          <FormSteps activeStep={activeStep} />
          <Typography variant="h6">User Address</Typography>
          <form>
            <TextField
              type="text"
              id="addressLineOne"
              label="Address Line One"
              margin="dense"
              fullWidth
            />

            <TextField
              type="text"
              id="addressLineTwo"
              label="Address Line Two"
              margin="dense"
              fullWidth
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={country}
                onChange={handleCountryChange}
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
                value={state}
                onChange={handleStateChange}
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
                value={city}
                onChange={handleCityChange}
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
              fullWidth
            />

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
