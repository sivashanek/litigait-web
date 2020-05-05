
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fieldColor: {
        width: '100%',
        fontSize: '10px',
      '& :after': {
        borderBottomColor: '#2ca01c',
        fontSize: '10px',
      },
      '& :before': {
        borderBottomColor: '#2ca01c',
        fontSize: '10px',
      },
      color: 'green !important',
      '& label.Mui-focused': {
        color: '#2ca01c',
        fontSize: '10px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2ca01c',
        fontSize: '10px',
      },
      // '.MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated':{
      //   fontSize:'10px',
      // }
    },

    textSize:{
      fontSize: '14px',
    },

  }));
  

  export default useStyles;