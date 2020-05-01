import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        Button: {
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontFamily: 'Avenir-Bold',
            backgroundColor: '#fff !important',
            boxShadow: 'none',
            color: '#47AC39',
            fontSize: '18px', 
            paddingTop: '0px',
            "&:hover": {
                backgroundColor: '#fff !important',
                boxShadow: 'none',    
            }
        },
        link: {
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontFamily: 'Avenir-Bold',
            backgroundColor: '#fff !important',
            boxShadow: 'none',
            color: '#47AC39',
            fontSize: '18px',
            paddingTop: '10px',
            paddingBottom: '10px'
        },
        label: {
            fontWeight: 'bold',
            fontFamily: 'Avenir-Bold',
            textTransform: 'uppercase',
            marginRight: '2em'
        }
    
  }));
  
  export default useStyles;