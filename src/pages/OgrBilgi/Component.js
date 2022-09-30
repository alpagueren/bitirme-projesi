import React from 'react';

import Container from '@material-ui/core/Container';

import useMediaQuery from '@material-ui/core/useMediaQuery';


import Avatar from  'pages/OgrBilgi/AvatarComp'

import Meta from 'components/Meta';

import useStyles from './styles';




function Welcome() {
  const classes = useStyles();
  const matchSmallScreen = useMediaQuery('(max-width: 50px)');
  return (
    <>
      <Meta
        title="Öğrenci Bilgi"
        description="Öğrenci Bilgi"
      />
    <Container maxWidth="xl" className={classes.root}>
        <Avatar/>
      </Container>
    </>
  );
}


export default Welcome;
