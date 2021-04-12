import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
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
