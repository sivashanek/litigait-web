
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect } from 'react-router-dom';
import * as Loads from 'react-loads';
import HomePage from 'containers/HomePage';
import { selectLoggedIn, selectLoading, selectUser, selectToken } from 'blocks/session/selectors';
import { verifySession } from 'blocks/session/actions';
import Spinner from 'components/Spinner';
import store2 from 'store2';

function Auth({ Component, path, exact = false, children, data, childRoutes, loggedIn, dispatch, loading, user, token }) {
    const {
        response: Page,
        error,
        isPending,
        isResolved,
        isRejected
    } = Loads.useLoads(path, Component);

    useEffect(() => {
        const secret = store2.get('secret');
        if (loggedIn) {
            dispatch(verifySession(secret || token))
        }
    }, []);

    return (
        <Route
            exact={exact}
            path={path}
            render={props => {
                return loading ? <Spinner loading={loading} /> : loggedIn ?
                    (<div>
                        {isPending && 'Loading...'}
                        {isRejected && 'Rejected'}
                        {Page && <Page {...props}>{children}</Page>}
                    </div>) :
                    data && data.route ?
                        <HomePage {...props} /> :
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    children: 'LoginForm',
                                    form: 'login'
                                }
                            }}
                        />
            }}
        />
    )

}


const mapStateToProps = createStructuredSelector({
    loggedIn: selectLoggedIn(),
    loading: selectLoading(),
    user: selectUser(),
    token: selectToken()
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);