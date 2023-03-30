import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Icon } from '@mui/material';
import PopupCard from '../components/PopupCard';
import PopupColumn from '../components/PopupColumn';
import PopupEditCard from '../components/PopupEditCard';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
interface Item {
  id: string;
  name: string;
}

interface PopupContentProps {
  item: Item;
  onClose: () => void;
}

const items: Item[] = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
];

function Grids() {

  
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [popupContent, setPopupContent] = React.useState<React.ReactElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopupEditCard = (item: Item) => {
    setAnchorEl(null);
    setPopupContent(<PopupContent item={item} onClose={() => setPopupContent(null)} />);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <PopupColumn />
      <div className="grid">
        {items.map((item) => (
          <Grid key={item.id} container spacing={2}>
            <Grid item xs={12} sm={10}>
              <Typography variant="h6" gutterBottom>
                <div className='popoverGrid'>
                  {item.name}         <div>
                    <button className='icon' aria-describedby={id} onClick={handleClick}>
                      <Icon>
                        <div>
                          <MoreVertIcon />
                        </div>
                      </Icon>
                    </button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <div>
                        <Button onClick={() => openPopupEditCard(item)} variant="text">Editer</Button>
                        <br />
                        <Button variant="text">Supprimer</Button>
                      </div>
                    </Popover>
                  </div>
                </div>
              </Typography>
              <Paper sx={{ p: 2, height: '100%' }}>Contents of column 2</Paper>
              <PopupCard />
            </Grid>
          </Grid>
        ))}
      </div>
      {popupContent}
    </>
  );
}

function PopupContent(props: PopupContentProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <div>
      <Dialog open={open}>
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
          <Button onClick={props.onClose}>Annuler</Button>
          <Button onClick={handleClose}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Grids;
