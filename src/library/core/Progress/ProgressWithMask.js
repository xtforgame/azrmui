import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import createCommonStyles from '~/styles/common';

const useStyles = makeStyles(theme => ({
  ...createCommonStyles(theme, 'flex'),
  maskedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    // verticalFlexContainer
    flexDirection: 'column',
    display: 'flex',
    // height: '100%',
  },
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    // verticalFlexContainer
    flexDirection: 'column',
    display: 'flex',
    // height: '100%',
  },
  progress: {
    // margin: `0 ${theme.spacing(2}px`,
  },
}));

const ProgressWithMask = (props) => {
  const {
    color,
    style,
    zIndex,
    backgroundColor,
    delay,
    ...rest
  } = props;

  const classes = useStyles();

  const [show, setShow] = useState(false);
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  const extraStyle = {};

  if (show) {
    if (zIndex != null) {
      extraStyle.zIndex = zIndex;
    }
    if (backgroundColor != null) {
      extraStyle.backgroundColor = backgroundColor;
    }
  }

  return (
    <div
      className={show ? classes.maskedContainer : classes.container}
      style={{
        ...style,
        ...extraStyle,
      }}
      {...rest}
    >
      <div className={classes.flex1} />
      <div className={classes.flexContainer}>
        <div className={classes.flex1} />
        {show && <CircularProgress className={classes.progress} size={50} color={color || 'primary'} thickness={7} />}
        <div className={classes.flex1} />
      </div>
      <div className={classes.flex1} />
    </div>
  );
};

export default ProgressWithMask;
