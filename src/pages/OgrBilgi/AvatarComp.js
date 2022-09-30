import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="default" align="center">
      {'Copyright © '}
      <Link color="default" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    backgroundColor:'default',
    marginLeft:'200px',
    height: '100vh',
    
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'default' ,
      backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop:'100px',
    height:'350px',
    marginRight:'150px',
   
   
  },
  Grid: {
    color:'default',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'100px',
    
  },
  paper: {
    color:'default',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'100px',
    
  },

}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  >
        <div className={classes.paper} >
         
          <Typography component="h1" variant="h4">
          Öğrenci adı
          </Typography>

          <Typography component="h1" variant="h5">
          E-Posta
          </Typography>

          <Typography component="h3" variant="h12">
          Fakülte ve Bölümü
          </Typography>

          <Typography component="h3" variant="h12">
          Sınıfı
          </Typography>
           
            
        
         
        </div>
      </Grid>
    </Grid>
  );
}