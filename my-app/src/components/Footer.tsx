import React, { useState } from 'react';
import './Footer.css';
import config from '../Config';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Tooltip } from '@mui/material';
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
      <Box
        position="fixed"
        bottom={0}
        right={0}
        padding={2}      >
        <Tooltip title={<p>&copy; {new Date().getFullYear()} {config.companyShortName}. - Full-Stack Developer. All rights reserved.</p>} arrow>
          <Fab color="secondary" size='medium' aria-label="Contach Us" onClick={handleOpen} >
            <ConnectWithoutContactOutlinedIcon />
          </Fab>
        </Tooltip>
      </Box>
      <AlertDialog openDialog={openDialog} handleClose={handleClose} />
    </footer>
  );
};

export default Footer;