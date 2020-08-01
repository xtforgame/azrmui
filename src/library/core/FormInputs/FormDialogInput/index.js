/* eslint-disable react/no-multi-comp */

import React from 'react';
import FdiDialog from './FdiDialog';
import FdiButton from './FdiButton';
import useFormDialogInput from './useFormDialogInput';

/*
  props:
    onChange(value)
    label
    title (default = label)
    value
    displayValue(value) => text
    renderButton
    buttonProps
    renderDialog
    dialogProps
*/
export default (props) => {
  const {
    Button = FdiButton,
    Dialog = FdiDialog,
    label,
    title,
    value,
  } = props;

  const {
    renderButton: rb = propsForButton => (
      <Button
        label={label}
        value={propsForButton.valueForDisplay}
        onClick={propsForButton.handleOpen}
        onKeyDown={propsForButton.handleOpen}
        {...propsForButton.buttonProps}
      />
    ),
    renderDialog: rd = propsForDialog => (
      <Dialog
        title={title != null ? title : label}
        value={value}
        {...propsForDialog.dialogProps}
      />
    ),
  } = props;

  const {
    // propsForButton,
    // propsForDialog,
    // dialogExited,

    renderButton,
    renderDialog,
  } = useFormDialogInput({
    ...props,
    renderButton: rb,
    renderDialog: rd,
  }, {
    overwriteProps: {
      label,
      title,
    },
  });

  return (
    <React.Fragment>
      {renderButton()}
      {renderDialog()}
    </React.Fragment>
  );
};
