import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, styled, TextField } from '@mui/material';

import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'libphonenumber-js';

interface PhoneNumberInputProps {
  label: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ label }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setError(!isValidPhoneNumber(value, 'US'));
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={phoneNumber}
      onChange={handleChange}
      error={error}
      helperText={error ? 'Invalid phone number' : ''}
    />
  );
};

export default PhoneNumberInput;
