import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import useFormDialogInput from '../FormInputs/FormDialogInput/useFormDialogInput';
import DialogEx from '../Dialogs/DialogEx';
import WithSearch from './WithSearch';

export default (p) => {
  const {
    isFileExists,
    defaultPaths = [],
    defaultFileName = '',
    onSelected = () => {},

    filePicker,
    folderPicker,

    ...props
  } = p;
  const [value, setValue] = useState(defaultPaths || []);

  const {
    renderButton,
    renderDialog,
  } = useFormDialogInput({
    displayValue: v => v,
    onChange: (v) => {
      onSelected(v);
    },
    value,
    renderButton: ({ buttonProps }) => (
      <Button
        variant="contained"
        {...buttonProps}
      >
        File Picker
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
          title="Open"
          value={value}
          onClose={() => handleClose()}
          onChange={setValue}
          onSelect={(info, options) => {
            if (info.type === 'newFolder') {
              options.refresh();
              return;
            }
            if (filePicker) {
              const ps = options.paths.concat([info.relPath]);
              handleClose({
                paths: ps,
                path: ps.join('/'),
                type: 'file',
              });
            }
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
          {folderPicker && (
            <Button
              autoFocus
              onClick={() => {
                const ps = value;
                handleClose({
                  paths: ps,
                  path: ps.join('/'),
                  type: 'folder',
                });
              }}
              color="primary"
            >
              Select Folder
            </Button>
          )}
        </DialogActions>
      </DialogEx>
    ),
  });

  return (
    <React.Fragment>
      {renderButton()}
      {renderDialog()}
    </React.Fragment>
  );
};
