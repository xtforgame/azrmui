import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import useFormDialogInput from '../FormInputs/FormDialogInput/useFormDialogInput';
import useStateWithError from '../../hooks/useStateWithError';
import useDialogState, { Cancel } from '../../hooks/useDialogState';
import DialogEx from '../Dialogs/DialogEx';
import ConfirmDialog from '../Dialogs/ConfirmDialog';
import { FormTextField } from '../FormInputs';
import WithSearch from './WithSearch';


export default (p) => {
  const {
    isFileExists,
    defaultPaths = [],
    defaultFileName = '',
    onSelected = () => {},

    ...props
  } = p;
  const [value, setValue] = useState(defaultPaths || []);

  const [filename, setFilename, filenameError, setFilenameError] = useStateWithError(defaultFileName || '');
  const [viewCallbacks, updateViewCallbacks] = useState({
    clearList: () => {},
    refresh: () => {},
    getViewOptions: () => ({}),
  });

  let handleOverwriteDialogOpen = null;
  let save = null;

  const {
    renderButton,
    renderDialog,
    useDialogWithButtonStateResult: [, { handleClose }],
  } = useFormDialogInput({
    displayValue: v => v,
    onChange: (v) => {
      onSelected(v);
    },
    onClose: () => {
      setFilename('');
    },
    value,
    renderButton: ({ buttonProps }) => (
      <Button
        variant="contained"
        {...buttonProps}
      >
        File Saver
      </Button>
    ),
    renderDialog: ({
      value,
      handleClose,
      dialogProps,
    }) => (
      <DialogEx
        fullHeight
        dialogProps={dialogProps}
      >
        <WithSearch
          {...props}
          title="Save As..."
          value={value}
          onChange={setValue}
          onClose={() => handleClose()}
          updateViewCallbacks={updateViewCallbacks}
          onSelect={(info, options) => {
            if (info.type === 'newFolder') {
              options.refresh();
              return;
            }
            setFilename(info.relPath);
          }}
          // customProps={{
          //   getActionMenuItems: (closeMenu, options) => [
          //     <MenuItem
          //       key="delete"
          //       selected
          //       onClick={(event) => {
          //         options.clearList();
          //         setTimeout(() => {
          //           options.refresh();
          //         }, 1000);
          //         // handleClose(2);
          //         closeMenu();
          //       }}
          //     >
          //       Delete
          //     </MenuItem>,
          //   ],
          // }}
        />
        <DialogActions>
          <FormTextField
            error={!!filenameError}
            helperText={filenameError}
            // label={label}
            // onKeyPress={handleEnterForTextField}
            value={filename}
            onChange={e => setFilename(e.target.value)}
            autoFocus
            margin="dense"
            fullWidth
          />
          <Button
            autoFocus
            onClick={async () => {
              if (props.canCreate) {
                try {
                  const errorMsg = await Promise.resolve(props.canCreate({
                    filename,
                    type: 'file',
                    params: {
                      options: viewCallbacks.getViewOptions(),
                    },
                  }));
                  if (errorMsg) {
                    setFilenameError(errorMsg);
                    return;
                  }
                } catch (error) {
                  setFilenameError(error.message);
                  return;
                }
              }
              const fileExists = await Promise.resolve(isFileExists({
                filename,
                type: 'file',
                params: {
                  options: viewCallbacks.getViewOptions(),
                },
              }));
              if (fileExists) {
                handleOverwriteDialogOpen();
              } else {
                save(handleClose);
              }
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </DialogEx>
    ),
  });

  save = (handleClose) => {
    const ps = value.concat([filename]);
    handleClose({
      paths: ps,
      path: ps.join('/'),
      type: 'file',
    });
  };

  const [{
    open,
    exited: overwriteDialogExited,
    dialogProps: overwriteDialogOpenProps,
  }, {
    // setOpen,
    // setExited,
    handleOpen: _handleOverwriteDialogOpen,
    handleClose: handleOverwriteDialogClose,
    // handleExited,
  }] = useDialogState({
    open: (v) => {
      // console.log('v :', v);
    },
    close: (v) => {
      // if (v !== undefined && v !== Cancel) {
      if (v === true) {
        save(handleClose);
      }
    },
  });

  handleOverwriteDialogOpen = _handleOverwriteDialogOpen;

  return (
    <React.Fragment>
      {renderButton()}
      {renderDialog()}
      {!overwriteDialogExited && (
        <ConfirmDialog
          title="Create Folder"
          contentText="Folder Name"
          onClose={handleOverwriteDialogClose}
          dialogProps={overwriteDialogOpenProps}
        />
      )}
    </React.Fragment>
  );
};
