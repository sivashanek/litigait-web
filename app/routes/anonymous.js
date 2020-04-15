

import NotFoundPage from 'containers/NotFoundPage'

export default function (LazyLoadedRoute) {

    return [
        {
            name: "login",
            title: "Login Page",
            path: "/",
            exact: true,
            component: LazyLoadedRoute({
                name: 'session',
                container: 'LoginPage'
            }) 
        },
        {
            name: "register",
            title: "Register Page",
            path: "/register",
            component: LazyLoadedRoute({
                name: 'register',
                container: 'RegisterPage'
            })
        },
        {
            path: "*",
            component: NotFoundPage
        }
    ];


}