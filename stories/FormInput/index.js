import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import FormPhoneOrEmailInput from './FormPhoneOrEmailInput';
import FormSelect from './FormSelect';
import FormSwitch from './FormSwitch';

import {
  FlexRow,
  FlexColumn,
} from '../shared';

console.log('module :', module);
storiesOf('FormInputs', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('FormPhoneOrEmailInput',
    ()=>(
      <div id="xxx">
        <FormPhoneOrEmailInput />
      </div>
    )
  )
  .add('FormSelect',
    ()=>(
      <div id="xxx">
        <FormSelect />
      </div>
    )
  )
  .add('FormSwitch',
    ()=>(
      <div id="xxx">
        <FormSwitch />
      </div>
    )
  );