import React, { lazy, Suspense } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import storage from 'utils/storage';

const loadable = (name, importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);
  if (name) {
    const LazyStorage = storage(name);
    const { reducer, saga } = LazyStorage;
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });
  }
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
