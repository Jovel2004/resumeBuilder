import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



function Header() {
    const projectInfo = "ResumeBuilder is a user-friendly web application designed to help users create professional resumes effortlessly. With customizable templates, real-time preview, and easy data input, it allows anyone to build, download, and share a polished resume within minutes — no design or technical skills required."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"purple"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img width={'30px'} src="https://t4.ftcdn.net/jpg/02/51/67/07/360_F_251670796_uldt5Z4Od04dCE4hYAsUxbbwNnl0Own9.jpg" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/'} className='text-light text-decoration-none'>R-builder</Link> 
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">About Us</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header