/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import useStateWithError from '../../hooks/useStateWithError';
import { FormTextField, FormSpace } from '../FormInputs';
import ConfirmDialog from './ConfirmDialog';

export default (props) => {
  const {
    asyncValidator,
    validator,
    onClose = (() => null),
  } = props;
  const [text, setText, textError, setTextError] = useStateWithError(props.value || '');

  const handleClose = (_result) => {
    let result = _result;
    if (result === true) {
      result = text;
      if (validator) {
        const errorText = validator(text);
        if (errorText) {
          setTextError(errorText);
          return;
        }
      }
      if (asyncValidator) {
        Promise.resolve(asyncValidator(text))
        .then((errorText) => {
          if (errorText) {
            setTextError(errorText);
          } else {
            onClose(result);
          }
        })
        .catch(error => setTextError(error.message));
        return;
      }
    }
    onClose(result);
  };

  const handleEnterForTextField = (event) => {
    if (event.key === 'Enter') {
      handleClose(true);
      event.preventDefault();
    }
  };

  const {
    id,
    label,
    ...rest
  } = props;

  return (
    <ConfirmDialog
      {...rest}
      onClose={handleClose}
    >
      <DialogContent>
        <FormSpace variant="content2" />
        <FormTextField
          error={!!textError}
          helperText={textError}
          label={label}
          onKeyPress={handleEnterForTextField}
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
          margin="dense"
          fullWidth
        />
      </DialogContent>
    </ConfirmDialog>
  );
}
