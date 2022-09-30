import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    'justify-content': 'flex-start',
    'align-items': 'center',
    'marginLeft':'0px',
    'marginBottom':'250px',
    
    height: '28%',
    
  },
  root1: {
    padding:5,
     
   }, root2: {
     display: 'flex',
     'justify-content': 'flex-start',
     'align-items': 'center',
     'marginLeft':'500px',
     'marginTop':'0px',
     flexGrow: 3,
     maxWidth: 380,
    
     
   },
  
}));

export default useStyles;
