import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        create: {
            fontWeight: 'bold',
            borderRadius: '28px',
            textTransform: 'capitalize',
            fontFamily: 'Avenir-Regular' 
        },
        table: {
            boxShadow: '0px 0px 8px 1px lightgrey',
            borderRadius: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginTop: '40px',
            overflow: 'auto'
        }
    
  }));
  
  export default useStyles;