import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'monospace,monospace',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
  },
}));

export default (props) => {
  const {
    className,
  } = props;
  const classes = useStyles();
  return (
    <pre
      {...props}
      className={clsx(classes.root, className)}
    />
  );
};
