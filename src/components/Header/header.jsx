import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        </Typography>
        <nav>
          <Link to="/page1" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
            Tab 1
          </Link>
          <Link to="/page2" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
            Tab 2
          </Link>
          <Link to="/page3" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
            Tab 3
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
