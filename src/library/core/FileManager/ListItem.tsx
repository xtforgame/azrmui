/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  blue,
  pink,
  // green,
  grey,
  amber,
} from '@material-ui/core/colors';
import MoreActionMenuButton from '../Buttons/MoreActionMenuButton';
import {
  Paths,
  GetViewOptionsResult,
  FileListItem,
} from './interfaces';

const useStyles = makeStyles(() => ({
  unknownAvatar: {
    backgroundColor: grey[400],
  },
  fileAvatar: {
    backgroundColor: pink[400],
  },
  folderAvatar: {
    backgroundColor: blue[400],
  },
  createAvatar: {
    margin: 4,
    // backgroundColor: green[400],
    backgroundColor: 'transparent',
  },
  otherAvatar: {
    backgroundColor: amber[400],
  },
}));

export type ListItemProps = GetViewOptionsResult & {
  info: FileListItem;
  pathKey: string;
  paths: Paths;
  viewOptions: GetViewOptionsResult;
};

export default (props : ListItemProps) => {
  const {
    info,
    appendPath,

    onSelect = () => {},
    // selection,
    customProps,

    viewOptions,
    handleCreate,
    // paths,
  } = props;

  const classes = useStyles();

  const renderAction = customProps && customProps.renderAction;
  const getActionMenuItems = customProps && customProps.getActionMenuItems;

  if (info.type === 'newFile') {
    return null;
  }

  if (info.type === 'newFolder') {
    return (
      <ListItem
        key="new/folder"
        button
        onClick={() => {
          if (info.type === 'folder') {
            appendPath(info.relPath);
          } else {
            handleCreate({
              info, options: viewOptions,
            }, (p) => {
              // console.log('p :', p);
              onSelect(info, viewOptions);
              // return false;
            });
          }
        }}
      >
        <ListItemText
          primary="Create New Folder"
          // secondary={'Secondary text'}
        />
        <Avatar aria-label="Avatar" className={classes.createAvatar}>
          <AddIcon color="primary" />
        </Avatar>
      </ListItem>
    );
  }

  return (
    <ListItem
      key={info.name}
      button
      onClick={() => {
        if (info.type === 'folder') {
          appendPath(info.relPath);
        } else {
          onSelect(info, viewOptions);
        }
      }}
    >
      <ListItemAvatar>
        <Avatar aria-label="Avatar" className={info.type === 'folder' ? classes.folderAvatar : classes.fileAvatar}>
          {
            info.type === 'folder' ? (<FolderIcon />)
              : (<InsertDriveFileIcon />)
          }
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={info.name}
        // secondary={'Secondary text'}
      />
      {
        renderAction ? renderAction() : (
          getActionMenuItems && (
            <ListItemSecondaryAction>
              <MoreActionMenuButton
                getActionMenuItems={closeMenu => getActionMenuItems(closeMenu, viewOptions)}
              />
            </ListItemSecondaryAction>
          )
        )
      }
      {
        // info.type === 'folder' && (
        //   <ListItemSecondaryAction>
        //     <IconButton
        //       edge="end"
        //       aria-label="Done"
        //       onClick={() => {
        //         refresh();
        //         console.log('onClick');
        //       }}
        //     >
        //       <KeyboardArrowRight />
        //     </IconButton>
        //   </ListItemSecondaryAction>
        // )
      }
    </ListItem>
  );
};
