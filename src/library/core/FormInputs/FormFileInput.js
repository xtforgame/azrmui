/* eslint-disable react/prop-types, react/forbid-prop-types, jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { readFile as defaultReadFile } from '~/utils/imageHelpers';
import { promiseReduce } from '~/common/utils';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
}));

const FormFileInput = (props) => {
  const {
    id,
    accept,
    onLoadEnd = () => {},
    onChange = () => {},
    children,
    inputProps,
    labelProps,
    readFile = defaultReadFile,
    readFileOption = {},
  } = props;
  console.log('readFileOption :', readFileOption);
  const classes = useStyles();
  return (
    <React.Fragment>
      <input
        {...inputProps}
        accept={accept}
        className={classes.input}
        id={id}
        type="file"
        onChange={(e) => {
          onChange(e);
          const files = Array.from(e.target.files);
          promiseReduce(files, (_, file) => readFile(file, readFileOption)
          .then((imgInfo) => {
            onLoadEnd(imgInfo);
          }));
        }}
      />
      <label
        {...labelProps}
        htmlFor={id}
      >
        {children}
      </label>
    </React.Fragment>
  );
};

FormFileInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormFileInput;
