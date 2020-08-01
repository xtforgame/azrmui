"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Folder = _interopRequireDefault(require("@material-ui/icons/Folder"));

var _InsertDriveFile = _interopRequireDefault(require("@material-ui/icons/InsertDriveFile"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _colors = require("@material-ui/core/colors");

var _MoreActionMenuButton = _interopRequireDefault(require("library/core/Buttons/MoreActionMenuButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(() => ({
  unknownAvatar: {
    backgroundColor: _colors.grey[400]
  },
  fileAvatar: {
    backgroundColor: _colors.pink[400]
  },
  folderAvatar: {
    backgroundColor: _colors.blue[400]
  },
  createAvatar: {
    margin: 4,
    backgroundColor: 'transparent'
  },
  otherAvatar: {
    backgroundColor: _colors.amber[400]
  }
}));

var _default = props => {
  const {
    info,
    appendPath,
    onSelect = () => {},
    selection,
    customProps,
    viewOptions,
    handleCreate,
    paths
  } = props;
  const classes = useStyles();
  const renderAction = customProps && customProps.renderAction;
  const getActionMenuItems = customProps && customProps.getActionMenuItems;

  if (info.type === 'newFile') {
    return null;
  }

  if (info.type === 'newFolder') {
    return _react.default.createElement(_ListItem.default, {
      key: info.name,
      button: true,
      onClick: () => {
        if (info.type === 'folder') {
          appendPath(info.relPath);
        } else {
          handleCreate({
            info,
            options: viewOptions
          }, p => {
            onSelect(info, viewOptions);
          });
        }
      }
    }, _react.default.createElement(_ListItemText.default, {
      primary: "Create New Folder"
    }), _react.default.createElement(_Avatar.default, {
      "aria-label": "Avatar",
      className: classes.createAvatar
    }, _react.default.createElement(_Add.default, {
      color: "primary"
    })));
  }

  return _react.default.createElement(_ListItem.default, {
    key: info.name,
    button: true,
    onClick: () => {
      if (info.type === 'folder') {
        appendPath(info.relPath);
      } else {
        onSelect(info, viewOptions);
      }
    }
  }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
    "aria-label": "Avatar",
    className: info.type === 'folder' ? classes.folderAvatar : classes.fileAvatar
  }, info.type === 'folder' ? _react.default.createElement(_Folder.default, null) : _react.default.createElement(_InsertDriveFile.default, null))), _react.default.createElement(_ListItemText.default, {
    primary: info.name
  }), renderAction ? renderAction() : getActionMenuItems && _react.default.createElement(_ListItemSecondaryAction.default, null, _react.default.createElement(_MoreActionMenuButton.default, {
    getActionMenuItems: closeMenu => getActionMenuItems(closeMenu, viewOptions)
  })));
};

exports.default = _default;