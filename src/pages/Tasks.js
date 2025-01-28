import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Checkbox, Typography, Box } from '@mui/material';

const Tasks = () => {
  const [tasks, setTasks] = useState([{ text: 'This is a hardcoded task', completed: false }]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Wyśrodkowanie pionowe
        mx: 'auto',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
      >
        Tasks
      </Typography>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ maxWidth: 400, mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addTask}
        sx={{ maxWidth: 400, mb: 2 }}
      >
        Add Task
      </Button>
      <List sx={{ maxWidth: 400, width: '100%' }}>
        {tasks.map((t, index) => (
          <ListItem
            key={index}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Checkbox
              checked={t.completed}
              onChange={() => toggleTask(index)}
            />
            <ListItemText
              primary={t.text}
              sx={{
                textDecoration: t.completed ? 'line-through' : 'none',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tasks;
