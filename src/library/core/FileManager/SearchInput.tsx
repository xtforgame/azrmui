/* eslint-disable react/prop-types, react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import FormTextField from '../FormInputs/FormTextField';

const styles = theme => ({
});

const SearchInput = (props) => {
  const {
    id,
    onClear,
    ...rest
  } = props;
  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        // tabIndex="-1"
        onClick={onClear}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
      >
        <CancelIcon />
      </IconButton>
    </InputAdornment>
  );
  return (
    <FormTextField
      id={id}
      InputProps={{
        endAdornment,
      }}
      {...rest}
    />
  );
};

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
)(SearchInput);
