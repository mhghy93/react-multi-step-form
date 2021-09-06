import React, { useState } from 'react';

import UserDetailsForm from './UserDetailsForm';
import UserAddressForm from './UserAddressForm';
import UserConfirm from './UserConfirm';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    addressLineOne: '',
    addressLineTwo: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleResetStep = () => {
    setStep(1);
  };

  const clearFormData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      addressLineOne: '',
      addressLineTwo: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
    });
  };

  switch (step) {
    case 1:
      return (
        <UserDetailsForm
          formData={formData}
          setFormData={setFormData}
          step={step}
          handleNextStep={handleNextStep}
        />
      );
    case 2:
      return (
        <UserAddressForm
          formData={formData}
          setFormData={setFormData}
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 3:
      return (
        <UserConfirm
          formData={formData}
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleResetStep={handleResetStep}
          clearFormData={clearFormData}
        />
      );
    default:
      return (
        <UserDetailsForm
          formData={formData}
          setFormData={setFormData}
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
  }
};

export default MultiStepForm;
