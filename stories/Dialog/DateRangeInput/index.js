import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateRangeInput from './DateRangeInput';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

console.log('module :', module);

const StoryBody = () => {
  const [value, onChange] = useState([null, null]);
  console.log('value :', value);
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateRangeInput
        value={value}
        onClose={onChange}
      />
    </MuiPickersUtilsProvider>
  );
}

storiesOf('Dialogs', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('DateRangeInput',
    () => (
      <div style={{ margin: 16 }}>
        <StoryBody />
      </div>
    )
  );