import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { FormSwitch, FormSpace } from '~/core/FormInputs';


const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
}));

export default (props) => {
  const [value, setValue] = useState(false);

  return (
    <div style={{ margin: 16 }}>
      <FormSwitch
        label="Switch"
        value={value}
        onChange={(e, v) => {
          setValue(e.target.checked);
        }}
        margin="dense"
      />
    </div>
  );
};
