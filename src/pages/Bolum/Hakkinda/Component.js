import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import Meta from 'components/Meta';

import useStyles from './styles';
import isMobile from 'utils/isMobile';
import { Link as RouterLink } from 'react-router-dom';

import Iletisim from 'pages/Bolum/IletisimComp'

function Bolum({ isOpen, onClose, onOpen }) {
  const classes = useStyles({ 
    isOpen,
    isMobile,});



 
  return (
   
    <>
      <Meta
        title="Fakulte"
        description="Fakulte"
      />
     
      <Container size="large" maxWidth="sm" className={classes.root}>
      <Button variant="outlined" component={RouterLink} to="/Bolum/Duyuru-Etkinlik">
       Duyuru ve Etkinlik
      </Button>
      
      <Button variant="outlined" component={RouterLink} to="/Bolum/DersProgrami">
       Ders Programı
      </Button>

      <Button variant="outlined" component={RouterLink} to="/Bolum/Hakkinda">
        Bölüm Hakkında
      </Button>
      </Container>

      <Container size="large" maxWidth="sm" className={classes.root1}>

        <Iletisim/>
      </Container>
     
    </>
  );
}


export default Bolum;

