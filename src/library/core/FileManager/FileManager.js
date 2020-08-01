import React, { useState } from 'react';
// import jsonpointer from 'jsonpointer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import InputDialog from '../Dialogs/InputDialog';
import useFormDialogInput from '../FormInputs/FormDialogInput/useFormDialogInput';
import FolderView from './FolderView';

const invalidFolderRegex = /[<>:"/|?*]/;

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const useStyles = makeStyles(() => ({
}));

// const jsonpointerPath = paths.map(p => `/${p}/children`).join('');
// // console.log('jsonpointerPath :', jsonpointerPath);
// const currentList = jsonpointer.get(fileTree, jsonpointerPath);

const defaultRenderFolderView = (params, {
  viewPaths,
  ...rest
}) => {
  const { index, key } = params;
  return (
    <FolderView
      key={key}
      pathKey={viewPaths.join('/')}
      index={index}
      paths={viewPaths}
      {...rest}
    />
  );
};

export default (props) => {
  const {
    getFileList,
    createFileOrFolder = async () => {},
    filenameValidater = ((t) => {
      if (!t) {
        return 'folder name is empty';
      }
      if (invalidFolderRegex.test(t)) {
        return 'folder name contains invalid character: <, >, :, ", /, \\, |, ?, *';
      }
      return null;
    }),
    updateViewCallbacks = () => {},
    canCreate = (async () => {}),
    onPathsChange = () => {},
    renderFolderView: rfv,
    renderListItem,
    onSelect,
    selection,
    SwipeableViewsProps,
    customProps,

    value,
    onChange = () => {},
  } = props;
  const [controlled] = useState(!!value);
  let [paths, _setPaths] = useState(value || []);
  if (controlled) {
    paths = value;
    _setPaths = onChange;
  }
  const setPaths = (paths) => {
    onPathsChange(paths);
    _setPaths(paths);
  };
  // const [tabIndex, setTabIndex] = useState(0);

  const currentPathKey = paths.join('/');
  const renderFolderView = rfv || defaultRenderFolderView;

  // ====================

  const [createFileOrFolderInfo, setCreateFileOrFolderInfo] = useState();
  const {
    // renderButton,
    renderDialog,
    useDialogWithButtonStateResult: [, { handleOpen }],
  } = useFormDialogInput({
    displayValue: v => v,
    onChange: (filename) => {
      if (filename && createFileOrFolderInfo && createFileOrFolderInfo.cb) {
        createFileOrFolder({
          filename,
          ...createFileOrFolderInfo,
        })
        .then(result => createFileOrFolderInfo.cb(result));
      }
    },
    onOpen: (data) => {
      setCreateFileOrFolderInfo(data);
    },
    onClose: () => {
      setCreateFileOrFolderInfo(null);
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
      <InputDialog
        title="Create Folder"
        label="Folder Name"
        validator={filenameValidater}
        asyncValidator={async filename => canCreate({
          filename,
          type: 'folder',
          ...createFileOrFolderInfo,
        })}
        dialogProps={dialogProps}
        onClose={handleClose}
      />
    ),
  });

  return (
    <div style={{
      height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column',
    }}
    >
      <div
        style={{
          width: '100%', flexShrink: 0, paddingTop: 4, paddingBottom: 4, paddingLeft: 12, paddingRight: 12,
        }}
      >
        <Breadcrumbs
          key={paths.length}
          maxItems={5}
          itemsBeforeCollapse={2}
          itemsAfterCollapse={2}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            color="inherit"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              setPaths([]);
            }}
          >
            Root
          </Link>
          {
            paths.slice(0, paths.length - 1).map((p, i) => (
              <Link
                key={p}
                color="inherit"
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  setPaths(paths.slice(0, i + 1));
                }}
              >
                {p}
              </Link>
            ))
          }
          {
            !!paths.length && (<Typography color="textPrimary">{paths[paths.length - 1]}</Typography>)
          }
        </Breadcrumbs>
      </div>
      <div style={{
        width: '100%', flex: 1, overflowY: 'scroll', paddingTop: 4, paddingBottom: 4, paddingLeft: 12, paddingRight: 12,
      }}
      >
        <VirtualizeSwipeableViews
          index={paths.length}
          style={{ height: '100%' }}
          containerStyle={{ height: '100%' }}
          slideStyle={{ height: '100%', position: 'relative' }}
          {...{}/* onChangeIndex={this.handleChangeIndex} */}
          slideRenderer={(slideInfo) => {
            const viewPaths = paths.slice(0, slideInfo.index);
            return renderFolderView(slideInfo, {
              handleCreate: (params, cb) => {
                handleOpen({ params, cb });
              },
              updateViewCallbacks,
              getFileList,
              renderListItem,
              fullPaths: paths,
              viewPaths,
              setPaths,
              currentPathKey,
              onSelect,
              selection,
              customProps,
            });
          }}
          disabled
          {...SwipeableViewsProps}
        />
      </div>
      {/* renderButton() */}
      {renderDialog()}
    </div>
  );
};
