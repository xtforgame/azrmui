/* eslint-disable react/no-multi-comp */

import React, { useMemo } from 'react';
import useDialogWithButtonState, { Cancel } from '~/hooks/useDialogWithButtonState';

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
export default (props, options = {}, dependenciesArray) => {
  const {
    overwriteProps,
  } = options;
  const {
    renderButton,
    renderDialog,

    value,
    displayValue = v => v,
    buttonProps: bp,
    dialogProps: dp,
    sharedProps,
    onChange = () => {},
    onOpen = () => {},
    onClose = () => {},
  } = props;

  const useDialogWithButtonStateResult = useDialogWithButtonState({
    open: (v) => {
      onOpen(v);
    },
    close: (v) => {
      if (v !== undefined && v !== Cancel) {
        onChange(v);
      }
      onClose(v);
    },
    dialogProps: dp,
    buttonProps: bp,
  });
  const [{
    open,
    exited: dialogExited,
    dialogProps,
    buttonProps,
  }, {
    handleOpen,
    handleClose,
    handleExited,
  }] = useDialogWithButtonStateResult;

  const valueForDisplay = displayValue(value);
  const propsForButton = {
    handleOpen,
    value,
    valueForDisplay,
    ...overwriteProps,
    buttonProps,
    sharedProps,
    useDialogWithButtonStateResult,
  };

  const propsForDialog = {
    open,
    handleClose,
    handleExited,
    value,
    ...overwriteProps,
    dialogProps,
    sharedProps,
    useDialogWithButtonStateResult,
  };
  return {
    useDialogWithButtonStateResult,
    propsForButton,
    propsForDialog,
    dialogExited,
    renderButton: () => renderButton(propsForButton),
    renderDialog: () => {
      if (dialogExited) {
        return undefined;
      }
      return renderDialog(propsForDialog);
    },
  };
};
