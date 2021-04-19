import React from 'react';
import { storiesOf } from '@storybook/react';
import './CrudFormBasic';

import './DateRangeInput';

import ConfirmDialog from './ConfirmDialog';


console.log('module :', module);
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
  .add('ConfirmDialog',
    ()=>(
      <div style={{ margin: 16 }}>
        <ConfirmDialog />
      </div>
    )
  );