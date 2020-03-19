/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const styles = theme => ({
});

const FormSelect = (props) => {
  const {
    id,
    name,
    label,
    helperText,
    formProps,
    inputProps,
    classes,
    children,
    ...rest
  } = props;
  return (
    <FormControl {...formProps}>
      {!!label && (
        <InputLabel htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <Select
        id={id}
        input={<Input {...inputProps} name={name} id={id} />}
        {...rest}
      >
        {children}
      </Select>
      {!!helperText && (
        <FormHelperText id={`${id}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
)(FormSelect);
