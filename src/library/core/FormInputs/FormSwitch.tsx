/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import FormControlLabel, { FormControlLabelProps} from '@material-ui/core/FormControlLabel';
import Switch, { SwitchProps } from '@material-ui/core/Switch';

export type FormSwitchProps = SwitchProps & {
  label?: string;
  labelProps?: FormControlLabelProps;
};

export default (props : FormSwitchProps) => {
  const {
    label,
    labelProps,
    ...rest
  } = props;
  return (
    <FormControlLabel
      label={label}
      labelPlacement="start"
      control={(
        <Switch
          color="primary"
          {...rest}
        />
      )}
      {...labelProps}
    />
  );
};
