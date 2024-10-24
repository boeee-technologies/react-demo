import React, { useState } from 'react';
import './Footer.css';
import config from '../Config';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from '@mui/material';
import AlertDialog from './tik/AlertDialog';

const Footer: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  // Handle opening the dialog
  const handleOpen = () => {
    setOpenDialog(true);
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <footer className="footer">
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="secondary" aria-label="Contach Us" onClick={handleOpen} >
          <ContactEmergencyIcon />
        </Fab>
      </Box>
      <p>&copy; {new Date().getFullYear()} {config.companyShortName}. - Full-Stack Developer. All rights reserved.</p>
      <AlertDialog openDialog={openDialog} handleClose={handleClose} />

    </footer>
  );
};

export default Footer;