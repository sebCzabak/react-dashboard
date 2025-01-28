import React, { useState } from 'react';
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        mx: 'auto',
        maxWidth: 400,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
      >
        Settings
      </Typography>
      <FormGroup sx={{ width: '100%', mb: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          }
          label="Enable Notifications"
        />
      </FormGroup>
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="pl">Polish</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Settings;
