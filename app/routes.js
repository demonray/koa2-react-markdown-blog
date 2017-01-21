if (typeof(require.ensure) !== "function") {
    require.ensure = function(modules, callback) {
        callback(require);
    }
}

export default {
    childRoutes: [{
        path: '/',
        component: require('./containers/App'),
        getIndexRoute(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, {
                    component: require('./components/home'),
                })
            })
        },
        childRoutes: [{
            path: 'home',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./components/home'))
                })
            }
        }, {
            path: 'articals',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./components/articalList'))
                })
            }
        }]
    }]
}
