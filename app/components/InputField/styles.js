

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fieldColor: {
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
      // '.MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated':{
      //   fontSize:'10px',
      // }
    },

    textSize:{
      fontSize: '14px',
    }

    

    
  
  }));
  

  export default useStyles;