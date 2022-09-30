import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import NewMessage from 'pages/Mesaj/OgrenciMesaj/NewMessage'
import Meta from 'components/Meta';

import useStyles from './styles';
import isMobile from 'utils/isMobile';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



function Fakulte({ isOpen, onClose, onOpen }) {
 
  const classes = useStyles({ 
    isOpen,
    isMobile,
    });


       /* // Mesaj Yazma Yeri
          <TextField
          id="outlined-multiline-static"
          label="Mesaj"
          multiline
          rows={10}
          fullWidth
          variant="outlined"
          labelWidth={60} /> 
      */ 
 
  return (
   
    <>
      <Meta
        title="Öğrenciler Mesaj"
        description="Öğrenciler Mesaj"
      />
     
      <Container size="large" maxWidth="sm" className={classes.root}>
      <Button variant="outlined"  component={RouterLink} to="./OgrenciMesaj">
       Öğrenciler İle
      </Button>

      <Button variant="outlined"  component={RouterLink} to="./OgretmenMesaj" >
        Öğretim Görevlileri İle
      </Button>

      </Container>
      
      <Container size="large" maxWidth="sm" className={classes.root2}>
      
       <NewMessage/>
        </Container>
    </>
  );
}


export default Fakulte;

