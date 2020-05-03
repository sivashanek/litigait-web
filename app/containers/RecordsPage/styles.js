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
    },
    filter: {
        padding: '10px',
        border: '2px solid gray',
        borderRadius: '28px',
        WebkitAppearance: 'none',
        paddingLeft: '20px',
        paddingRight: '40px',
        fontFamily: 'Avenir-Bold',
        outline: 'none',
        width: '239px'
    },
    dropdown: {
        width: '19px',
        position: 'relative',
        left: '208px',
        display: 'table',
        top: '31px',
        height: '15px'
    }
}));

export default useStyles;