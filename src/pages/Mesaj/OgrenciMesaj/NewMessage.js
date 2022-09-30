import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function FormDialog() {

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
          padding:30,
        },
        marginn:{
           width:160,
           marginTop:130,
          marginLeft:570,
        },
      }));

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div>
      <Button variant="outlined" color="default" onClick={handleClickOpen} className={classes.marginn}>
        Yeni Mesaj
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">Yeni Mesaj</DialogTitle>
       
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" >
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Alıcı" />
            <TextField id="standard-search" label="Konu" type="search"  />
          </Grid>
        </Grid>

        
       

       </div>

       <TextField
          id="outlined-multiline-static"
          label="Mesaj"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Kapat
          </Button>
          <Button onClick={handleClose} color="default">
           Gönder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}