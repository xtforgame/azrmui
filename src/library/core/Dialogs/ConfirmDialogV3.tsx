/* eslint-disable react/prop-types, react/forbid-prop-types */
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex1: {
    flex: 1,
  },
  appBar: {
    position: 'relative',
  },
  paper: {
    margin: 'auto',
  },
}));

export type FormCheckboxPropsBase = {
  title?: string;
  contents?: any;
  contentText?: string;
  fullScreen?: boolean;
  children?: ReactNode;
  onClose: Function;
  buttonComponents?: {
    yes?: any;
    confirm?: any;
    no?: any;
    cancel?: any;
  };
  buttonTexts?: {
    yes?: any;
    confirm?: any;
    no?: any;
    cancel?: any;
  };
};

export type FormCheckboxProps = FormCheckboxPropsBase & {
  dialogProps: DialogProps;
};

export default (props : FormCheckboxProps) => {
  const {
    title,
    contents,
    contentText,
    buttonComponents = {},
    buttonTexts = {},
    dialogProps,
    children,
    fullScreen,
    onClose,
  } = props;

  const handleClose = result => (...args) => {
    onClose(result, ...args);
  };

  const classes = useStyles();

  const ConfirmButton = buttonComponents.yes || buttonComponents.confirm || Button;
  const CancelButton = buttonComponents.no || buttonComponents.cancel || Button;

  const ConfirmButtonText = buttonTexts.yes || buttonTexts.confirm || 'Confirm';
  const CancelButtonText = buttonTexts.no || buttonTexts.cancel || 'Cancel';

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      onClose={handleClose(false)}
      scroll="paper"
      aria-labelledby="form-dialog-title"
      classes={{
        paper: classes.paper,
      }}
      {...dialogProps}
    >
      {fullScreen && (
        <AppBar className={clsx(classes.appBar)}>
          <Toolbar>
            <IconButton color="inherit" className={clsx(classes.menuButton)} onClick={handleClose(false)} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={clsx(classes.flex1)}>
              {title || ''}
            </Typography>
            {/* <Button color="inherit" onClick={onClose}>
            save
          </Button> */}
          </Toolbar>
        </AppBar>
      )
      }
      {!fullScreen && (
        <DialogTitle id="form-dialog-title">
          {title || ''}
        </DialogTitle>
      )}
      {!!(contents || contentText) && (
        <DialogContent>
          {contents}
          {!contents
          && (
            <DialogContentText>
              {contentText}
            </DialogContentText>
          )
          }
        </DialogContent>
      )}
      {children}
      <DialogActions>
        <CancelButton onClick={handleClose(false)}>
          {CancelButtonText}
        </CancelButton>
        <ConfirmButton onClick={handleClose(true)} variant="contained" color="primary">
          {ConfirmButtonText}
        </ConfirmButton>
      </DialogActions>
    </Dialog>
  );
};
