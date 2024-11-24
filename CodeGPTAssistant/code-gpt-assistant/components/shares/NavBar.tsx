import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Shopping Mall
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* Add other navigation elements here */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
