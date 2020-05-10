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
    },
    body: {
        paddingTop: '12px',
        paddingBottom: '12px',
        "& div":{
            display:'flex'
        }
    },
    button: {
        fontWeight: 'bold',
        borderRadius: '28px',
        textTransform: 'none',
        fontFamily: 'Avenir-Regular'
    },
    cards: {
        boxShadow: '0px 0px 8px 1px lightgrey',
        borderRadius: '8px',
        paddingTop: '8px',
        paddingBottom: '8px',
        overflow: 'auto'
    },
    attach: {
        width: '19px',
        height: '19px'
    }
  }));
  
  export default useStyles;