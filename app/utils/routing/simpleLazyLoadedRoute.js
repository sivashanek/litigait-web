
import records from 'blocks/records';

export default (injectReducer, injectSaga) => ({ path, pageName, exact, require, container, childRoutes, data }) => ({
    path,
    pageName,
    exact,
    Component() {
        if (typeof container === 'function') {
            const containerProvider = container;
            const [containerName, ...blockNames] = require || {};
            const blocksPromise = blockNames.map((blockName) => Promise.resolve(records(blockName)));
            const containerPromise = import(`containers/${containerName}/index`);
            const promises = [containerPromise, ...blocksPromise];
              
            return Promise.all(promises).then(([container, ...blocks]) => { // eslint-disable-line no-shadow
              blocks.forEach((block) => {
                const { name, reducer, saga } = block.default || block;
      
                if (reducer) {
                  injectReducer(name, reducer);
                }
      
                if (saga) {
                  injectSaga(name ,{saga});
                }
              });
              
              
                try {
                  const finalContainer = containerProvider.apply(container.default, blocks.map((block) => block.default || block));
                  return finalContainer
                } catch (error) {
                  return error;
                }

                  
            }).catch(error => {
                return error;
            });
          } else {
            return Promise.resolve(import(`containers/${container}/index`)
              .then((defaultContainer) => defaultContainer.default)
              .catch(error => error));
          }


    },
    childRoutes,
    data,
});
