

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#2ca01c',
      textTransform: 'none',
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: '#2ca01c',
      }
    },

    marginTopMedium: {
      marginTop: theme.spacing(4),
    },
    
    div: {
      textAlign: 'center',
      marginTop: theme.spacing(1.3),
    },
  
    lockIcon: {
      width: '20px',
      height: '20px',
      marginRight: '4px',
    },
  
    linkColor: {
      color: '#0077c5',
      textDecoration: 'none'
    },
  
    remember: {
      marginTop: theme.spacing(1),
    },
  
  }));
  

  export default useStyles;