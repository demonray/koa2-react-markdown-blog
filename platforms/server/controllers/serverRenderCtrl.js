import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import config from '../../common/config'
import createStore from '../../../app/store/createStore'
const store = createStore()

export default async (ctx, next, renderProps) => {
  const route = renderProps.routes[renderProps.routes.length - 1]
  let prefetchTasks = []
  for (let component of renderProps.components) {
    if (component && component.WrappedComponent && component.WrappedComponent.fetchData) {
      const _tasks = component.WrappedComponent.fetchData(store.getState(), store.dispatch)
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks)
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks)
      }
    }
  }

  await Promise.all(prefetchTasks)

  await ctx.render('index', {
    title: config.title,
    dev: ctx.app.env === 'development',
    reduxData: store.getState(),
    app: renderToString(<Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  })
}
