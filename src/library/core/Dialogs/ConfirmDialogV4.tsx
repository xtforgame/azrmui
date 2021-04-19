/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
import ConfirmDialog, { FormCheckboxPropsBase } from './ConfirmDialogV3';

export type FormCheckboxProps = DialogProps & FormCheckboxPropsBase;

export default (props) => {
  const {
    title,
    contents,
    contentText,
    buttonComponents,
    buttonTexts,
    onClose,
    children,
    fullScreen,
    ...dialogProps
  } = props;

  return (
    <ConfirmDialog
      title={title}
      contents={contents}
      contentText={contentText}
      buttonComponents={buttonComponents}
      buttonTexts={buttonTexts}
      onClose={onClose}
      fullScreen={fullScreen}
      dialogProps={dialogProps}
    >
      {children}
    </ConfirmDialog>
  );
};
