/* eslint-disable react/prop-types, react/forbid-prop-types, react/jsx-filename-extension */
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import FormTextField, { FormTextFieldProps } from './FormTextField';

export type FormPasswordFieldProps = FormTextFieldProps & {
  onShowPassswordClick?: (e: any) => void;
};

export default (props : FormPasswordFieldProps) => {
  const {
    id,
    type = 'password',
    onShowPassswordClick,
    ...rest
  } = props;
  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        // tabIndex="-1"
        onClick={onShowPassswordClick}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
      >
        {type !== 'password' ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
  return (
    <FormTextField
      id={id}
      type={type}
      InputProps={{
        endAdornment,
      }}
      {...rest}
    />
  );
};
