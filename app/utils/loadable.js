import React, { lazy, Suspense } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import storage from 'utils/storage';

const loadable = (name, importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);
  const LazyStorage = storage(name);
  console.log('LazyStorage', LazyStorage);
  const { reducer, sagas} = LazyStorage;
 
  return props => (
      <Suspense fallback={fallback}>
        <LazyComponent {...props}  />
      </Suspense>
  );
};

export default loadable;
