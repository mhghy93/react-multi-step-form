import React, { useState } from 'react';

import UserDetailsForm from './UserDetailsForm';
import UserAddressForm from './UserAddressForm';
import UserConfirm from './UserConfirm';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleResetStep = () => {
    setStep(1);
  };

  switch (step) {
    case 1:
      return <UserDetailsForm step={step} handleNextStep={handleNextStep} />;
    case 2:
      return (
        <UserAddressForm
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 3:
      return (
        <UserConfirm
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleResetStep={handleResetStep}
        />
      );
    default:
      return (
        <UserDetailsForm
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
  }
};

export default MultiStepForm;
