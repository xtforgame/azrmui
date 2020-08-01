import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';
import IconWithTextToolbar from '../Toolbars/IconWithTextToolbar';
import SearchToolbar from '../Toolbars/SearchToolbar';
import FileManager from './FileManager';

export default (props) => {
  const {
    customProps = {},
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
  let toolbar = (
    <IconWithTextToolbar
      disableHeaderLeftButton
      // headerLeftIcon={<CloseIcon />}
      // onLeftButtonClick={() => {}}
      title="Select File"
      headerContent={(
        <IconButton color="inherit" onClick={() => setIsSearching(true)} aria-label="Search">
          <SearchIcon />
        </IconButton>
      )}
    />
  );
  if (isSearching) {
    toolbar = (<SearchToolbar value={searchText} onChange={e => setSearchText(e.target.value)} onCancel={finishSearch} />);
  }
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
