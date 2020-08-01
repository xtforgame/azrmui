import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchInput from './SearchInput';
import IconWithTextToolbar from '../Toolbars/IconWithTextToolbar';
import SearchToolbar from '../Toolbars/SearchToolbar';
import FileManager from './FileManager';

export default (props) => {
  const {
    title,
    customProps = {},
    onClose,
    ...rest
  } = props;

  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  const rawFileFilter = customProps.fileFilter || ((
    info,
    {
      isSearching,
      searchText,
    },
    options,
  ) => {
    if (!isSearching) {
      return true;
    }
    return info.relPath && info.relPath.includes(searchText);
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
            customProps={{
              fileFilter,
              ...customProps,
            }}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};
