/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import {
  selectLoggedIn,
  selectUser,
  selectError,
  selectLocation,
} from 'blocks/session/selectors';


import '../../../src/main.css';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import SVG from 'react-inlinesvg';
import GlobalStyle from '../../global-styles';
import { logOut } from '../../blocks/session/actions';
import { StyledListItem, useStyles} from './styles';


function App(props) {
  const { loggedIn, container, pages, dispatch } = props;
  const activePath = location.pathname;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logOut())
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {pages.map((page, index) => (
          <Link
            key={index}
            to={(page.data && page.data.path) || '/'}
            className={classes.link}>
            <StyledListItem
              button
              key={(page.data && page.data.title) || ''}
              selected={activePath.indexOf(page.data.path) > -1}>
              <ListItemText primary={(page.data && page.data.title) || ''} />
            </StyledListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {loggedIn ? (
        <div>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" noWrap className={classes.title}>
                D & J Law Firm
              </Typography>
              <Typography noWrap className={classes.settings}   onClick={handleLogout}>
                <SVG
                  src={require('images/icons/settins.svg')}
                  style={{ width: '23px' }} 
                />{' '}
                {props.user && props.user.email}
              </Typography>

              <Typography noWrap className={classes.help}>
                <SVG
                  src={require('images/icons/help.svg')}
                  style={{ width: '23px' }}
                />{' '}
                Help
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}>
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open>
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      ) : null}
      <main className={loggedIn ? classes.content : classes.login}>
        {loggedIn ? <div className={classes.toolbar} /> : null}
        {props.children}
      </main>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  user: PropTypes.object,
  loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  error: selectError(),
  user: selectUser(),
  location: selectLocation()
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(App);
