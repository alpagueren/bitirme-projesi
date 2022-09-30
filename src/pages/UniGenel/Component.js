import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import Meta from 'components/Meta';

import useStyles from './styles';
import isMobile from 'utils/isMobile';
import { Link as RouterLink } from 'react-router-dom';

function Fakulte({ isOpen, onClose, onOpen }) {
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
      <Button variant="outlined"  component={RouterLink} to="/UniGenel/Duyuru">
       Duyuru
      </Button>

      <Button variant="outlined"  component={RouterLink} to="/UniGenel/Etkinlik" >
        Etkinlik
      </Button>

      <Button variant="outlined"  component={RouterLink} to="/UniGenel/Iletisim">
        İletişim
      </Button>
      </Container>
     
    </>
  );
}


export default Fakulte;

