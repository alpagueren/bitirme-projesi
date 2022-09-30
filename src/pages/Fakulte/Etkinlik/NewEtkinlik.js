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

import EtkinlikListesi from './EtkinlikListesi';


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
  
 
 


  const [eBaslik, seteBaslik] = useState("");
  const [etkinlikZamani, setEtkinlikZamani] = useState("");
  const [eIcerik, seteIcerik] = useState("");
  const [konum, setKonum] = useState("");

  const handleSubmitEtkinlik = () => {
    const etkinlikRef = firebase.database().ref('fakulteetkinlik');

    const fakulteetkinlik = {
      baslik: eBaslik,
      konum,
      icerik: eIcerik,
      etkinlikZamani
    };

    etkinlikRef.push(fakulteetkinlik);

    seteBaslik("");
    setKonum("");
    setEtkinlikZamani("");
    seteIcerik("");
  }

  return (
   
    <div>

    

      <EtkinlikListesi/>   
      

      <Button variant="outlined" color="default" onClick={handleClickOpenEtk} className={classes.marginn}>
        Yeni Etkinlik
        </Button>


      
      <Dialog open={openEtk} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
      <DialogTitle id="form-dialog-title">Yeni Etkinlik</DialogTitle>
       
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" >
        
          <Grid item>

          <TextField 
          id="outlined-basic" 
          label="Başlık" 
          value={eBaslik}
          onChange={(e)=> seteBaslik(e.target.value)}
          variant="outlined" />

          <TextField id="outlined-basic" 
          label="İçerik" 
          variant="outlined" 
          value={eIcerik}
          onChange={(e)=> seteIcerik(e.target.value)}/>

          
          <TextField 
          id="outlined-basic" 
          label="Etkinlik Zamanı" 
          value={etkinlikZamani}
          onChange={(e)=> setEtkinlikZamani(e.target.value)}
          variant="outlined" />

          <TextField id="outlined-basic" 
          label="Konum" 
          variant="outlined" 
          value={konum}
          onChange={(e)=> setKonum(e.target.value)}/>

          </Grid>
        </Grid>

       </div>

        <DialogActions >
          <Button onClick={handleCloseEtk} color="default">
            Kapat
          </Button>
          <Button onClick={handleCloseEtk, handleSubmitEtkinlik}  color="default">
           Gönder
          </Button>
        </DialogActions>
      </Dialog>

    </div>
    
  );
}