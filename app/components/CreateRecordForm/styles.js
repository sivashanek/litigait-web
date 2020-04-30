

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4)
    },
    submitBtn: {
        fontWeight: 'bold',
        borderRadius: '20px',
        fontFamily: 'Avenir-Regular',
        paddingLeft: '25px',
        paddingRight: '25px',
        marginTop: '20px',
        marginRight: '15px'
    },
    cancelBtn: {
        fontWeight: 'bold',
        borderRadius: '20px',
        fontFamily: 'Avenir-Regular',
        paddingLeft: '25px',
        paddingRight: '25px',
        marginTop: '20px',
        backgroundColor: 'gray !important'
    }
}));


export default useStyles;