/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'utils/loadable';

export default store => ({name, container}) => loadable(name, () => import(`containers/${container}`), {
        fallback: <div><h1>Loading....</h1></div>,
    }, store);

