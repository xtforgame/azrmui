import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// import libphonenumber from 'google-libphonenumber';
// const cc2Rc =libphonenumber.metadata.countryCodeToRegionCodeMap;

export default (props) => {
  const {
    classes, locale, dispatch, changeLocale, regionCode, ...rest
  } = props;
  const [open, setOpen] = useState < boolean > (false);
  const [anchorEl, setAnchorEl] = useState < Element | null > (null);

  const handleMenuItemClick = (event, index, locale) => {

  };

  const getMenuItmes = () => ['TW', 'CN'].map((_locale, i) => (
    <MenuItem
      key={_locale}
      selected
      onClick={event => handleMenuItemClick(event, i, _locale)}
    >
      {_locale}
    </MenuItem>
  ));

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-owns={open ? 'language-menu' : null}
        aria-haspopup="true"
        {...rest}
        onClick={handleClick}
      >
        <img
          alt={regionCode}
          src={`https://lipis.github.io/flag-icon-css/flags/4x3/${regionCode.toLowerCase()}.svg`}
          width="24"
        />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleRequestClose}
      >
        {getMenuItmes()}
      </Menu>
    </div>
  );
};
