/* eslint-disable react/prop-types, react/forbid-prop-types, react/jsx-filename-extension */
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormTextField, { FormTextFieldProps } from './FormTextField';
import NumberFormatInput, { NumberFormatInputProps } from './NumberFormatInput';

export type FormNumberInputProps = FormTextFieldProps & {
  currency?: boolean;
  inputProps?: NumberFormatInputProps;
  thousandSeparator?: (e: any) => boolean;
};

export default (props: FormNumberInputProps) => {
  const {
    currency,
    thousandSeparator = true,
    InputProps: IPs,
    inputProps,
    ...rest
  } = props;
  let InputProps : any = {
    inputComponent: NumberFormatInput,
    inputProps: {
      decimalScale: 0,
      thousandSeparator,
      // prefix: '$',
      ...inputProps,
    },
  };

  if (currency) {
    InputProps.startAdornment = <InputAdornment position="start">$</InputAdornment>;
  }

  InputProps = {
    ...InputProps,
    ...IPs,
  };

  return (
    <FormTextField
      InputProps={InputProps}
      {...rest}
    />
  );
};
