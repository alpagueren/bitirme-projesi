import React, {useState, useEffect} from 'react'
import firebase from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
   
  export default function DuyuruListesi() {
    const useStyles = makeStyles((theme) => ({
      root: {
        
        marginLeft: 800,
        width: '100%',
        maxWidth: 360,
       
        backgroundColor: theme.palette.background.paper,
      },
    }));
    const [duyuruListesi, setDuyuruListesi] = useState();
    const classes = useStyles({ 
    })
    useEffect(() => {
      const duyuruReference = firebase.database().ref('klupduyuru');
      duyuruReference.on('value', snapshot => {
        const klupduyuru = snapshot.val();
        const duyuruListesi = [];
        for (let id in klupduyuru) {
          duyuruListesi.push(klupduyuru[id])
        }
  
        console.log(duyuruListesi);
        setDuyuruListesi(duyuruListesi); 
      });
    }, []);
   
    return (
      <div style={{ }} >
          {duyuruListesi ? duyuruListesi.map((klupduyuru) =>  
          <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary= {klupduyuru.baslik} />
            Konu: {klupduyuru.konu} 
            <br/>
            İçerik: {klupduyuru.icerik}

          </ListItem>                    
        </List>) : ''}
      </div>
  )
}
