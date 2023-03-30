import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

interface PopupEditCardProps {
  onClose: () => void;
}

const PopupEditCard: React.FC<PopupEditCardProps> = (props) => {
  const { onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Modifier la colonne </DialogTitle>
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
          <Button onClick={handleClose}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupEditCard;
