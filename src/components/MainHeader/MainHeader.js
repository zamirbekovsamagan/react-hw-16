import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import DarkModeSwitch from './DarkModeSwitch';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
      <DarkModeSwitch label='Mode' />
    </header>
  );
};

export default MainHeader;
