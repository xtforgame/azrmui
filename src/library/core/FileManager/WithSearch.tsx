/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchInput from './SearchInput';
import IconWithTextToolbar from '../Toolbars/IconWithTextToolbar';
// import SearchToolbar from '../Toolbars/SearchToolbar';
import FileManager from './FileManager';
import { FileManagerProps } from './interfaces';

export type WithSearchProps<CustomProps = any> = FileManagerProps<CustomProps> & {
  title: string;
  onClose: Function;

};

export default function WithSearch<CustomProps = any>(props : WithSearchProps<CustomProps>) {
  const {
    title,
    customProps = {},
    onClose,
    fileFilter: ff = (() => true),
    ...rest
  } = props;

  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  const rawFileFilter = ((
    info,
    {
      isSearching,
      searchText,
    },
    options,
  ) => {
    if (!isSearching) {
      return ff(info, options);
    }
    const result : boolean = !!info.relPath && info.relPath.includes(searchText);
    if (result) {
      return ff(info, options);
    }
    return false;
  });

  const searchInfo = {
    isSearching,
    searchText,
  };

  const fileFilter = (info, options) => rawFileFilter(info, searchInfo, options);

  const finishSearch = () => {
    setSearchText('');
    setIsSearching(false);
  };
  const toolbar = (
    <IconWithTextToolbar
      disableHeaderLeftButton={isSearching}
      headerLeftIcon={<SearchIcon />}
      onLeftButtonClick={() => setIsSearching(true)}
      title={isSearching ? (
        <SearchInput
          id="search-file"
          margin="dense"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onClear={finishSearch}
        />
      ) : title}
      headerContent={onClose && (
        <IconButton color="inherit" onClick={() => onClose()} aria-label="close">
          <CloseIcon />
        </IconButton>
      )}
    />
  );
  // if (isSearching) {
  //   toolbar = (<SearchToolbar value={searchText} onChange={e => setSearchText(e.target.value)} onCancel={finishSearch} />);
  // }
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', minHeight: 1,
    }}
    >
      {toolbar}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', minHeight: 1,
      }}
      >
        <div style={{ flex: 1, overflowY: 'hidden' }}>
          <FileManager
            customProps={customProps}
            fileFilter={fileFilter}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
}
