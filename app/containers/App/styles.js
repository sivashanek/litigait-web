

import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const drawerWidth  = 240;

export const StyledListItem = withStyles({
    root: {
      "&$selected": {
        backgroundColor: "black"
      },
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: '#2C2C2F',
      },
      "&.MuiListItem-root.Mui-selected": {
        backgroundColor: "black"
      },
    },
    selected: {}
  })(ListItem);
  
export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      background: '#393a3d',
  
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      boxShadow: '0px 1px 6px -1px lightgrey',
      background: '#fff',
      zIndex: '9999',
      position: 'fixed',
      overflow: 'hidden'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      color: '#2DA01D',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: '#393A3D',
      color: '#F1F1F1',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    login: {
      flexGrow: 1,
    },
    icons: {
      color: '#F1F1F1',
    },
    title: {
      color: '#2DA01D',
      fontWeight: 'bold',
      marginTop: '8px'
    },
    link: {
      textDecoration: 'none',
      color: '#F1F1F1',
    },
    settings: {
      position: 'relative',
      color: '#A6A6A9',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  }));

