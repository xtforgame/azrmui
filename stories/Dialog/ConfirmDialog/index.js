import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import useDialogState, { Cancel } from '~/hooks/useDialogState';
import ConfirmDialogV2 from '~/core/Dialogs/ConfirmDialogV2';
import { FormTextField } from '~/core/FormInputs';


export default (props) => {
  const [value, setValue] = useState('');

  const [{
    exited,
    dialogProps,
  }, {
    handleOpen,
    // handleClose,
    // handleExited,
  }] = useDialogState({
    open: (v) => {
      console.log('v :', v);
    },
    close: (v) => {
      if (v === true) {
        console.log('v :', v);
      }
    },
  });

  return (
    <div style={{ margin: 16 }}>
      <Button variant="contained" onClick={handleOpen}>
        Xxxxxx
      </Button>
      {!exited && (
        <ConfirmDialogV2
          title="Title"
          fullScreen={false}
          buttonTexts={{
            yes: '確認',
            no: '取消',
          }}
          {...dialogProps}
        >
          <DialogContent>
            <FormTextField
              lable="Input"
              value={value}
              fullWidth
              margin="dense"
              onChange={e => setValue(e.target.value)}
            />
          </DialogContent>
        </ConfirmDialogV2>
      )}
    </div>
  );
};
