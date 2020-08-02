import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic';
import FilePicker from 'library/core/FileManager/FilePicker';
import FileSaver from 'library/core/FileManager/FileSaver';
import WithSearchExample from './WithSearchExample';
import { getFileList, canCreate, isFileExists, createFileOrFolder } from './shared';

console.log('module :', module);
storiesOf('FileManager', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('FileManagerBasic',
    ()=>(
      <div style={{ padding: 16 }}>
        <Basic
          getFileList={getFileList}
          createFileOrFolder={createFileOrFolder}
          canCreate={canCreate}
          isFileExists={isFileExists}
        />
      </div>
    )
  )
  .add('WithSearchExample',
    ()=>(
      <div style={{ padding: 16 }}>
        <WithSearchExample
          getFileList={getFileList}
          createFileOrFolder={createFileOrFolder}
          canCreate={canCreate}
          isFileExists={isFileExists}
        />
      </div>
    )
  )
  .add('FilePicker',
    ()=>(
      <div style={{ padding: 16 }}>
        <FilePicker
          filePicker
          folderPicker
          getFileList={getFileList}
          createFileOrFolder={createFileOrFolder}
          canCreate={canCreate}
          isFileExists={isFileExists}
          defaultPaths={['save-data-1']}
          onSelected={(v) => { console.log('v :', v); }}
        />
      </div>
    )
  )
  .add('FileSaver',
    ()=>(
      <div style={{ padding: 16 }}>
        <FileSaver
          getFileList={getFileList}
          createFileOrFolder={createFileOrFolder}
          canCreate={canCreate}
          isFileExists={isFileExists}
          defaultPaths={['save-data-1']}
          defaultFileName="save-data-1-10.js"
          onSelected={(v) => { console.log('v :', v); }}
        />
      </div>
    )
  );