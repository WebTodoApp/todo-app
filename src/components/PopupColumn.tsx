import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Créer une nouvelle colonne
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crée une nouvelle colonne</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"  
            id="name"
            label="Titre"
            type="text"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Créer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
