import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import firebase from './firebase'
import DuyuruListesi from './DuyuruListesi';


export default function FormDialog() {

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: 0,
          padding:10,
        },
        marginn:{
           width:160,
          marginLeft:70,
        },
        marginnn:{
          width:160,
         marginLeft:700,
       },
      }));

      
  const [open, setOpen] = React.useState(false);
  const [openEtk, setOpenEtk] = React.useState(false);
  const [value, setValue] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenEtk = () => {
    setOpenEtk(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEtk = () => {
    setOpenEtk(false);
  }
  
 
  const [baslik, setBaslik] = useState("");
  const [konu, setKonu] = useState("");
  const [icerik, setIcerik] = useState("");

  const handleSubmit = () => {
    const duyuruRef = firebase.database().ref('klupduyuru');

    const klupduyuru = {
      baslik,
      konu,
      icerik
    };

    duyuruRef.push(klupduyuru);

    setBaslik("");
    setKonu("");
    setIcerik("");
  }


  

  return (
   
    <div>

      <DuyuruListesi/>

      


      <Button variant="outlined" color="default" onClick={handleClickOpen} className={classes.marginnn}>
        Yeni Duyuru
      </Button>

      


      <Dialog open={open}  onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">Yeni Duyuru</DialogTitle>
       
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" >
        
          <Grid item>

          <TextField 
          id="outlined-basic" 
          label="Başlık" 
          value={baslik}
          onChange={(e)=> setBaslik(e.target.value)}
          variant="outlined" />

          <TextField id="outlined-basic" 
          label="Konu" 
          variant="outlined" 
          value={konu}
          onChange={(e)=> setKonu(e.target.value)}/>

          </Grid>
        </Grid>

        
       

       </div>

       <TextField
          id="outlined-multiline-static"
          label="İçerik"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          value={icerik}
          onChange={(e)=> setIcerik(e.target.value)}
        />
        <DialogActions >
          <Button onClick={handleClose} color="default">
            Kapat
          </Button>
          <Button onClick={handleClose, handleSubmit}  color="default">
           Gönder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}