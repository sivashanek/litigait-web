

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fieldColor: {
      width: '100%',  
      '& :after': {
        borderBottomColor: '#2ca01c',
      },
      '& :before': {
        borderBottomColor: '#2ca01c',
      },
      color: 'green !important',
      '& label.Mui-focused': {
        color: '#2ca01c',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2ca01c',
      },
    },
    textSize:{
      fontSize: '14px',
    },
    error: {
      fontSize: '14px',
      color: 'red'
    }
  
  }));
  

  export default useStyles;