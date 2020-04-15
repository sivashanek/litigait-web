

import NotFoundPage from 'containers/NotFoundPage'

export default function (LazyLoadedRoute) {

    return [
        {
            path: "*",
            component: NotFoundPage
        }
    ];


}