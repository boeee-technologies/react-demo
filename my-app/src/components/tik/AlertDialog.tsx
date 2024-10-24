import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import ProfilePict from '../../images/vy.jpeg'


interface AlertDialogProps {
    openDialog: boolean;
    handleClose: () => void;
}

export default function AlertDialog({ openDialog, handleClose }: AlertDialogProps) {
    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Contact Information</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box sx={{ marginBottom: '16px' }}>
                        <Typography variant="h5">
                            <Avatar alt="Vikas Yadav" src={ProfilePict} />Vikas Yadav
                            <Typography variant="body1" sx={{ marginTop: '12px' }}>
                                Solution Architect | Full-Stack Developer | AWS | React | .NET Core
                            </Typography>
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: '8px' }}>
                            <b>Email:</b> <Link href="mailto:vikas34338@gmail.com">vikas34338@gmail.com</Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: '8px' }}>
                            <b>Phone:</b> <Link href="tel:+1639XXX97">+1 639 XXX XX97</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: '16px' }}>
                            I offer consultation services and discussions related to my professional expertise in cloud infrastructure, full-stack development, or solution architecture. Feel free to reach out via email or phone for any queries.
                        </Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
