/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormDialogInput from 'library/core/FormInputs/FormDialogInput';
import {
  getDateDisplayFuncFromProps,
} from 'library/core/FormInputs/FormDateTimePicker/utils';
import RangeDialog from 'library/core/Range/RangeDialog';
import DateRange from 'library/core/Range/DateTime/DateRange';
import {
  normalizeDateTime,
  getDateRangeDisplayFunc,
} from 'library/core/Range/DateTime/utils';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}));

export default (props) => {
  const [value, onChange] = useState([null, null]);
  return (
    <FormDialogInput
      label="DateRange"
      value={value}
      displayValue={getDateRangeDisplayFunc(getDateDisplayFuncFromProps(props))}
      onChange={onChange}
      buttonProps={{
        fullWidth: true,
      }}
      renderDialog={({
        label,
        title,
        open,
        handleClose,
        value,
        dialogProps,
      }) => (
        <RangeDialog
          title={title != null ? title : label}
          normalize={normalizeDateTime}
          open={open}
          value={value}
          RangeInput={DateRange}
          {...dialogProps}
          onClose={handleClose}
        />
      )}
    />
  );
};
