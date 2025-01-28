import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Switch, FormControlLabel } from '@mui/material';
import Profile from './Profile';
import Settings from './Settings';
import Tasks from './Tasks';

const Dashboard = ({ onLogout, darkMode, setDarkMode }) => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
            }
            label="Dark Mode"
          />
          <Typography sx={{ mx: 2 }}>|</Typography>
          <Typography
            variant="button"
            onClick={onLogout}
            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
      <Tabs
        value={tab}
        onChange={handleChange}
        centered
      >
        <Tab label="My Profile" />
        <Tab label="Settings" />
        <Tab label="Tasks" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tab === 0 && <Profile />}
        {tab === 1 && <Settings />}
        {tab === 2 && <Tasks />}
      </Box>
    </Box>
  );
};

export default Dashboard;
