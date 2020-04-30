import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
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
        },
        children: {
            boxShadow: '0px 0px 8px 1px lightgrey',
            borderRadius: '8px',
            padding: '18px',
            marginTop: '40px',
            marginLeft: '20px'
        }
    
  }));
  
  export default useStyles;