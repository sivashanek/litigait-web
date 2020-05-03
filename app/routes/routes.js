
import schema from './schema';

const clientsColumns = schema().clients().columns;
const casesColumns = schema().cases().columns;
const ordersColumns = schema().orders().columns;
const filterColumns = schema().filterColumns();


export default function (simpleLazyLoadedRoute){

    return [
        simpleLazyLoadedRoute({
            path: '',
            exact: true,
            data: {
                route: true
            },
            container: 'DashboardPage'
        }),
        simpleLazyLoadedRoute({
            path: `clients`,
            name: 'clients',
            require: ['RecordsPage', 'clients'],
            data: {
                path: '/clients',
                title: 'Clients',
                icon: 'Group'
            },
            container: function RecordsPage(clients){
                return this('clients', `${process.env.PUBLIC_PATH || ''}/clients`, clientsColumns, clients.actions, clients.selectors, filterColumns, true)
            },
            childRoutes: [
                simpleLazyLoadedRoute({
                    path: `create`,
                    name: 'clients.create',
                    require: ['CreateRecordPage', 'clients'],
                    container: function CreateRecordPage(clients){
                        return this('clients.create', `${process.env.PUBLIC_PATH || ''}/clients`, clientsColumns, clients.actions, clients.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id/edit`,
                    name: 'clients.edit',
                    require: ['EditRecordPage', 'clients'],
                    container: function EditRecordPage(clients){
                        return this('clients.edit', `${process.env.PUBLIC_PATH || ''}/clients`, clientsColumns, clients.actions, clients.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id`,
                    name: 'clients.view',
                    require: ['ViewRecordPage', 'clients'],
                    container: function ViewRecordPage(clients){
                        return this('clients.view', `${process.env.PUBLIC_PATH || ''}/clients`, clientsColumns, clients.actions, clients.selectors)
                    }
                })
            ]
        }),
        simpleLazyLoadedRoute({
            path: `cases`,
            name: 'cases',
            require: ['RecordsPage', 'cases'],
            data: {
                path: '/cases',
                title: 'Cases',
                icon: 'Business'
            },
            container: function RecordsPage(cases){
                return this('cases', `${process.env.PUBLIC_PATH || ''}/cases`, casesColumns, cases.actions, cases.selectors, filterColumns)
            },
            childRoutes: [
                simpleLazyLoadedRoute({
                    path: `create`,
                    name: 'cases.create',
                    require: ['CreateRecordPage', 'cases'],
                    container: function CreateRecordPage(cases){
                        return this('cases.create', `${process.env.PUBLIC_PATH || ''}/cases`, casesColumns, cases.actions, cases.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id/edit`,
                    name: 'cases.edit',
                    require: ['EditRecordPage', 'cases'],
                    container: function EditRecordPage(cases){
                        return this('cases.edit', `${process.env.PUBLIC_PATH || ''}/cases`, casesColumns, cases.actions, cases.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id`,
                    name: 'cases.view',
                    require: ['ViewRecordPage', 'cases'],
                    container: function ViewRecordPage(cases){
                        return this('cases.view', `${process.env.PUBLIC_PATH || ''}/cases`, casesColumns, cases.actions, cases.selectors)
                    }
                })
            ]
        }),
        simpleLazyLoadedRoute({
            path: `orders`,
            name: 'orders',
            require: ['RecordsPage', 'orders'],
            container: function RecordsPage(orders){
                return this('orders', `${process.env.PUBLIC_PATH || ''}/orders`, ordersColumns, orders.actions, orders.selectors, filterColumns)
            },
            data: {
                path: '/orders',
                title: 'Orders',
                icon: 'ShoppingCart'
            },
            childRoutes: [
                simpleLazyLoadedRoute({
                    path: `create`,
                    name: 'orders.create',
                    require: ['CreateRecordPage', 'orders'],
                    container: function CreateRecordPage(orders){
                        return this('orders.create', `${process.env.PUBLIC_PATH || ''}/orders`, ordersColumns, orders.actions, orders.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id/edit`,
                    name: 'orders.edit',
                    require: ['EditRecordPage', 'orders'],
                    container: function EditRecordPage(orders){
                        return this('orders.edit', `${process.env.PUBLIC_PATH || ''}/orders`, ordersColumns, orders.actions, orders.selectors)
                    }
                }),
                simpleLazyLoadedRoute({
                    path: `:id`,
                    name: 'orders.view',
                    require: ['ViewRecordPage', 'orders'],
                    container: function ViewRecordPage(orders){
                        return this('orders.view', `${process.env.PUBLIC_PATH || ''}/orders`, ordersColumns, orders.actions, orders.selectors)
                    }
                })
            ]
        })
    ]
}