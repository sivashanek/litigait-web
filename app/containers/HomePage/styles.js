

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
      height: '80%',
      marginBottom: '30px',
    },
    marginLeftMedium: {
      marginLeft: theme.spacing(0.5),
      fontFamily: 'Avenir-Bold'
    },

  }));
  

  export default useStyles;