import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    children: {
        padding: '25px'
    }
  }));
  
  export default useStyles;