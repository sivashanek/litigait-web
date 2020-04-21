
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Loads from 'react-loads';
import LoginPage from 'containers/LoginPage';
import { selectLoggedIn } from 'blocks/session/selectors';

export default function ({ Component, path, exact = false, children, getState, data, childRoutes }) {
    const {
        response: Page,
        error,
        isPending,
        isResolved,
        isRejected
    } = Loads.useLoads(path, Component);
    const loggedIn = selectLoggedIn()(getState());
    
    return (
        <Route
            exact={exact}
            path={path}
            render={props => {
                return loggedIn ? 
                (<div>
                    {isPending && 'Loading...'}
                    {isRejected && 'Rejected'}
                    {Page && <Page {...props}>{children}</Page>}
                </div>) :
                data && data.route ?
                <LoginPage {...props} /> :
                <Redirect 
                    to={{
                        pathname: '/',
                        state: {
                            message: 'Login Required',
                            requestedPath: path
                        }
                    }}
                />
            }}
        />
    )

}