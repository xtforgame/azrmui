/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

export type FormCheckboxProps = CheckboxProps & {
  label?: string;
  labelProps?: FormControlLabelProps;
};

export default (props : FormCheckboxProps) => {
  const {
    label,
    ...rest
  } = props;

  return (
    <FormControlLabel
      control={(
        <Checkbox
          disableRipple={false}
          {...rest}
        />
      )}
      label={label}
    />
  );
};
