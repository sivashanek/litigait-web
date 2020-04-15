

export default function (LazyLoadedRoute) {

    return [
        {
            name: "login",
            title: "Login Page",
            path: "/",
            exact: true,
            component: LazyLoadedRoute('LoginPage') 
        },
        {
            name: "register",
            title: "Register Page",
            path: "/register",
            component: LazyLoadedRoute('RegisterPage')
        },
        {
            path: "*",
            component: LazyLoadedRoute('NotFoundPage')
        }
    ];


}