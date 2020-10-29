import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import EnhancedTable from './EnhancedTable';

import {
  FlexRow,
  FlexColumn,
} from '../shared';

storiesOf('EnhancedTable', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('SuccessButton',
    ()=>(
      <div style={{ margin: 16 }}>
        <EnhancedTable />
      </div>
    )
  );