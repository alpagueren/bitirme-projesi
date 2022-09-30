import React, {useState, useEffect} from 'react'
import firebase from './firebase';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default function EtkinlikListesi() {
  const useStyles = makeStyles((theme) => ({
    root: {
     
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
    const [etkinlikListesi, setEtkinlikListesi] = useState();
    const classes = useStyles({ 
    })
    useEffect(() => {
      const etkinlikReference = firebase.database().ref('etkinlik');
      etkinlikReference.on('value', snapshot => {
        const etkinlikler = snapshot.val();
       
        const etkinlikListesi = [];
        for (let id in etkinlikler) {
          etkinlikListesi.push(etkinlikler[id])
        }
  
        console.log(etkinlikListesi);
        setEtkinlikListesi(etkinlikListesi); 
      });
    }, []);
   
    return (
        <div styles={{}}>
            {etkinlikListesi ? etkinlikListesi.map((etkinlik) =>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary={etkinlik.baslik} />
              Icerik:  {etkinlik.icerik}
              <br/>
              <br/>
              Konum: {etkinlik.konum} 
              <br/>
              Zamanı:  {etkinlik.etkinlikZamani}
            </ListItem>                    
          </List>
          
  ) : ''}
        </div>
    )
}
