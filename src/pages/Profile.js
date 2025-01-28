import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Avatar } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'test@email.com',
  });
  const [editMode, setEditMode] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setUser(tempUser);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempUser(user);
    setEditMode(false);
  };

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
        My Profile
      </Typography>
      <Avatar sx={{ width: 56, height: 56, mb: 2 }}>JD</Avatar>
      {editMode ? (
        <>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={tempUser.name}
            onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={tempUser.email}
            onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography
            variant="body1"
            sx={{ mb: 1 }}
          >
            <strong>Name:</strong> {user.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1 }}
          >
            <strong>Email:</strong> {user.email}
          </Typography>
          <Button
            variant="contained"
            onClick={handleEdit}
          >
            Edit Profile
          </Button>
        </>
      )}
    </Box>
  );
};

export default Profile;
