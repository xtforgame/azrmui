import { fade } from '@material-ui/core/styles/colorManipulator';
import { Styles } from '@material-ui/styles/withStyles';

const styles : Styles<any, any> = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarPlaceholder: {
    ...theme.mixins.toolbar,
    // height: 56,
    // [theme.breakpoints.up('sm')]: {
    //   height: 64,
    // },
    flexShrink: 0,
  },
  toolbar: {
    // minHeight: 48,
    // height: 48,
  },
  appBarChip: {
    color: theme.palette.common.white,
    margin: theme.spacing(1),
    background: fade(theme.palette.common.white, 0.15),
    '&:hover, &:focus': {
      background: fade(theme.palette.common.white, 0.15),
    },
    '&:active': {
      background: fade(theme.palette.common.white, 0.15),
    },
  },
});

export default styles;
