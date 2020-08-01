import React from 'react';
import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';

export default (props) => {
  const {
    children,
    fullHeight,
    dialogProps: {
      onClose,
    },
  } = props;

  const handleClose = result => () => {
    onClose(result);
  };

  const style = {
    display: 'flex', overflowY: 'hidden', width: '100%', margin: 0,
  };

  if (fullHeight) {
    style.height = '100%';
  }

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style,
      }}
      {...props.dialogProps}
      onClose={handleClose()}
    >
      {children}
    </Dialog>
  );
};
