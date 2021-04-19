import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { FormOutlinedSelect, FormSpace } from '~/core/FormInputs';


const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
}));

export default (props) => {
  const [value, setValue] = useState(1);

  return (
    <div style={{ margin: 16 }}>
      <FormOutlinedSelect
        label="Value"
        value={value}
        onChange={(e, v) => {
          setValue(e.target.value);
        }}
        margin="dense"
        fullWidth
        items={[{ value: 1, label: 'Xxxx' }]}
      >
        <MenuItem value={3}>X</MenuItem>
      </FormOutlinedSelect>
    </div>
  );
};
