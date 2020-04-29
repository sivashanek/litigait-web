

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${require('images/login/app_bg.jpg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
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
    marginLeftMedium: {
      marginLeft: theme.spacing(0.5),
      fontFamily: 'Avenir-Bold'
    },
  
    formControlLabel: {
      marginTop: theme.spacing(2),
    },
  
    marginTopMedium: {
      marginTop: theme.spacing(4),
    },
  
    div: {
      textAlign: 'center',
      marginTop: theme.spacing(1.3),
    },
  
    copyRight: {
      position: 'relative',
    },
  
    copyRightBottom: {
      position: 'relative',
      marginBottom: '50px'
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